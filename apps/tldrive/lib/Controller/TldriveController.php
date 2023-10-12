<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: TlDrive <ashokbc@teamlocus.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\TlDrive\Controller;

use OCA\TlDrive\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IPreview;
use OCP\IRequest;
use OCP\Util;
use OCP\IConfig;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\IUserSession;
use OCA\TlDrive\Service\TldriveService;

class TldriveController extends Controller {

	/** @var IURLGenerator */
	protected $urlGenerator;

	/** @var IUserSession */
	protected $userSession;

	/** @var IPreview */
	protected $preview;

	/** @var IMimeTypeDetector */
	protected $mimeTypeDetector;

	/** @var View */
	protected $view;

	/** @var  TldriveService */
	private $tldriveService;

	/** @var IConfig */
	private $config;

	/**
	 * OCSEndPoint constructor.
	 *
	 * @param string $appName
	 * @param IRequest $request
	 * @param IURLGenerator $urlGenerator
	 * @param IUserSession $userSession
	 * @param IPreview $preview
	 * @param IMimeTypeDetector $mimeTypeDetector
	 * @param View $view
	 * @param TldriveService $tldriveService
	 */
	public function __construct(IRequest $request,
	IURLGenerator $urlGenerator,
	IUserSession $userSession,
	IPreview $preview,
	IMimeTypeDetector $mimeTypeDetector,
	View $view,
	TldriveService $tldriveService) {
		parent::__construct(Application::APP_ID, $request);

		$this->config = \OC::$server[IConfig::class];
		$this->urlGenerator = $urlGenerator;
		$this->userSession = $userSession;
		$this->preview = $preview;
		$this->mimeTypeDetector = $mimeTypeDetector;
		$this->view = $view;
		$this->tldriveService = $tldriveService;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function index(): TemplateResponse {
		//Util::addScript(Application::APP_ID, 'tldrive-main');

		return new TemplateResponse(Application::APP_ID, 'main');
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @param string $filter
	 * @param int $since
	 * @param int $limit
	 * @param bool $previews
	 * @param string $object_type
	 * @param int $object_id
	 * @param string $sort
	 * @return DataResponse
	 */
	public function getLog($filter, $since = 0, $limit = 50, $previews = false, $object_type = '', $object_id = 0, $sort = 'desc'): DataResponse {
		return $this->get($filter, $since, $limit, $previews, $object_type, $object_id, $sort);
	}

	/**
	 * @param string $filter
	 * @param int $since
	 * @param int $limit
	 * @param bool $previews
	 * @param string $filterObjectType
	 * @param int $filterObjectId
	 * @param string $sort
	 * @return DataResponse
	 */
	protected function get($filter, $since, $limit, $previews, $filterObjectType, $filterObjectId, $sort): DataResponse {
		
		$systemConfig = \OC::$server->getSystemConfig();
        $webhookBaseURL = $systemConfig->getValue('teamboardwebhookurl', false);

		$webhookURL = $webhookBaseURL."/WebService.svc/team_ViewShareObjectLogs";
		$request_para = array();
		$request_para['authkey'] = "e0a35311-523c-4991-a043-99761a640268-8b4457c4-c968-47f9-b841-a9625c8d04f8";
		$request_para['userid'] =  "0";
		$request_para['objectid'] =  560; //$this->objectId
		
		$header = array(
			"Accept:application/json",
			"Content-Type: application/json"
		);
		$request_data = json_encode($request_para);
		$ch   = curl_init();
		curl_setopt($ch, CURLOPT_URL, $webhookURL);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $request_data);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$server_output = curl_exec($ch);
		$error_msg = '';
		if (curl_errno($ch)) {
		    $error_msg = curl_error($ch);
		    $server_output = curl_exec($ch);
		}
		curl_close($ch);

		//$server_output = nl2br($server_output);
		$server_output = str_replace("﻿","",$server_output);
		$response = json_decode($server_output,true);

		$response_data = array();
		if(isset($response['status']) && $response['status']=='ok') {
			if(isset($response['response']['table'])) {
				$response_data = $response['response']['table'];
			}			
		}

		$headers = array();
		$preparedActivities = $response_data;

		return new DataResponse($preparedActivities, Http::STATUS_OK, $headers);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @PublicPage
	 */
	public function checkvpn() {
		$response = $this->tldriveService->checkDeepfoodVpn();
		/*
		echo "Response:";
		echo "<pre>".print_r($response,true)."</pre>";
		exit;
		*/
		return new JSONResponse($response, Http::STATUS_OK);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @PublicPage
	 */
	public function tldriveLogin() {
		if(isset($_POST) && !empty($_POST['ttlogin']) && $_POST['ttlogin'] == 'tt' && !empty($_POST['password']) && !empty($_POST['user']))
		{
			$response = $this->tldriveService->checkDeepfoodVpn();
			$loginme = 1;
			if(isset($response['httpstatus']) && $response['httpstatus']==200) {
				$loginme = 2;
			}
			if (\OC::$server->getUserSession()->isLoggedIn())
			{
				$uid = \OC::$server->getUserSession()->getUser()->getUID();
				if(!empty($_POST['user']) && ($_POST['user'] === $uid) )
				{
					header('Location: /');
					exit;
				}
				else
				{
					echo '<form id="myForm" action="/index.php/login" method="post" name="login">';
					foreach ($_POST as $a => $b) {
						echo '<input type="hidden" name="'.htmlentities($a).'" value="'.htmlentities($b).'">';
					}
					echo '<input type="hidden" id="loginme" name="loginme" value="'.$loginme.'">';
					echo '</form>';
					echo '<script nonce="'. \OC::$server->getContentSecurityPolicyNonceManager()->getNonce() .'" >';
					echo 'document.getElementById("myForm").submit();';
					echo '</script>';
					//Util::addScript(Application::APP_ID, 'ping');
					//Util::addScript(Application::APP_ID, 'ajax-call');
					exit;
				}
			}
			else
			{
				echo '<form id="myForm" action="/index.php/login" method="post" name="login">';
				foreach ($_POST as $a => $b) {
					echo '<input type="hidden" name="'.htmlentities($a).'" value="'.htmlentities($b).'">';
				}
				echo '<input type="hidden" id="loginme" name="loginme" value="'.$loginme.'">';
				echo '</form>';
				echo '<script nonce="'. \OC::$server->getContentSecurityPolicyNonceManager()->getNonce() .'" >';
				echo 'document.getElementById("myForm").submit();';
				echo '</script>';
				//Util::addScript(Application::APP_ID, 'ping');
				//Util::addScript(Application::APP_ID, 'ajax-call');
				exit;
			}
		}
		else{
			header('Location: /');
		}

		$response = new TemplateResponse(Application::APP_ID, 'view',['data'=>''],'blank'); 
		return $response;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @PublicPage
	 */
	public function viewDocument() {
		$fileid = 0;
		//echo "<pre>".print_r($_POST,true)."</pre>";
		
		if(isset($_POST['fileid']) && !empty($_POST['fileid'])) {
			$fileid = $_POST['fileid'];
			if(isset($_POST) && !empty($_POST['ttlogin']) && $_POST['ttlogin'] == 'tt' && !empty($_POST['password']) && !empty($_POST['user']))
			{
				$baseURL = \OC::$server->getURLGenerator()->getAbsoluteURL('');
				$officeViewURL = 'index.php/apps/onlyoffice/'.$fileid;
				$onlyOfficeURL = $baseURL.$officeViewURL;
				unset($_POST['fileid']);

				$response = $this->tldriveService->checkDeepfoodVpn();
				$loginme = 1;
				if(isset($response['httpstatus']) && $response['httpstatus']==200) {
					$loginme = 2;
				}

				if (\OC::$server->getUserSession()->isLoggedIn())
				{
					$uid = \OC::$server->getUserSession()->getUser()->getUID();
					if(!empty($_POST['user']) && ($_POST['user'] === $uid) )
					{
						header('Location: /'.$officeViewURL);
						exit;
					}
					else
					{
						echo '<form id="myForm" action="'.$baseURL.'index.php/login" method="post" name="login">';
						foreach ($_POST as $a => $b) {
							echo '<input type="hidden" name="'.htmlentities($a).'" value="'.htmlentities($b).'">';
						}
						echo '<input type="hidden" id="loginme" name="loginme" value="'.$loginme.'">';
						echo '<input type="hidden" id="redirect_url" name="redirect_url" value="'.$officeViewURL.'">';
						echo '</form>';
						echo '<script nonce="'. \OC::$server->getContentSecurityPolicyNonceManager()->getNonce() .'" >';
						echo 'document.getElementById("myForm").submit();';
						echo '</script>';
						//Util::addScript(Application::APP_ID, 'ping');
						//Util::addScript(Application::APP_ID, 'ajax-call');
						exit;
					}
				}
				else
				{
					echo '<form id="myForm" action="'.$baseURL.'index.php/login" method="post" name="login">';
					foreach ($_POST as $a => $b) {
						echo '<input type="hidden" name="'.htmlentities($a).'" value="'.htmlentities($b).'">';
					}
					echo '<input type="hidden" id="loginme" name="loginme" value="'.$loginme.'">';
					echo '<input type="hidden" id="redirect_url" name="redirect_url" value="'.$officeViewURL.'">';
					echo '</form>';
					echo '<script nonce="'. \OC::$server->getContentSecurityPolicyNonceManager()->getNonce() .'" >';
					echo 'document.getElementById("myForm").submit();';
					echo '</script>';
					//Util::addScript(Application::APP_ID, 'ping');
					//Util::addScript(Application::APP_ID, 'ajax-call');
					exit;
				}
			} else {
				header('Location: /');
			}

		} else {
			$errorMessage = 'Invalid file id.';
		}
		
		//echo $errorMessage;
		
		$response = new TemplateResponse(Application::APP_ID, 'view',['data'=>''],'blank'); 
		return $response;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 * @PublicPage
	 */
	public function checkLogin() {
		$viewURL = \OC::$server->getURLGenerator()->linkToRoute('demoapp.Teamboard.viewDocument');
		
		$data['view_url'] = $viewURL;

		$response = new TemplateResponse(Application::APP_ID, 'login',['data'=>$data],'blank'); 
		return $response;
	}
}
