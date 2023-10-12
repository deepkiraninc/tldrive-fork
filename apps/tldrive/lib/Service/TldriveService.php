<?php

namespace OCA\TlDrive\Service;

use OCP\L10N\IFactory;
use OCP\IURLGenerator;
use OCA\TlDrive\AppInfo\Application;
use OCA\TlDrive\Service\ConfigProxy;
use OCP\IConfig;
use OCP\IUserManager;
use OCP\IUser;
use OCP\IUserSession;
use OCP\AppFramework\Http;

/**
 * class AppRepository.
 *
 * @author Simon Vieille <simon@deblan.fr>
 */
class TldriveService
{
    /**
     * @var \OC_App
     */
    protected $ocApp;

    /**
     * @var IFactory
     */
    protected $l10nFactory;

    protected $headerAuthBase;

    /** @var IUserSession */
    private $userSession;

    private $l;

    /**
     * @var ConfigProxy
     */
    protected $config;

    /** @var IURLGenerator */
    private $urlGenerator;

    private $host_url;

    /** @var IUserManager */
    private $userManager;

    public function __construct(
        IFactory $l10nFactory,
        IConfig $config,
        IURLGenerator $urlGenerator,
        IUserManager $userManager,
        IUserSession $userSession
    )
    {
        //$this->ocApp = $ocApp;
        $this->l10nFactory = $l10nFactory;
        $this->config = $config;
        $this->urlGenerator = $urlGenerator;

        $url_generator   = \OC::$server->getURLGenerator();
        $this->host_url       =  $url_generator->getAbsoluteURL('');
        
        $this->userManager = $userManager;
        $this->userSession  = $userSession;

        $this->l = \OC::$server->getL10N('aaochat');

        $this->init();
    }

    public function init() {

    }

    public function removeHttp($url) {
       $disallowed = array('http://', 'https://');
       foreach($disallowed as $d) {
          if(strpos($url, $d) === 0) {
             return str_replace($d, '', $url);
          }
       }
       return $url;
    }

    public function checkDeepfoodVpn() {
        $vpnUrl = 'https://vpn.deepfoods.net';
        $header = array();
        /*$header = array(
            "Accept:application/json",
            "Content-Type:application/json"
        );*/

        $response = $this->curlGet($vpnUrl, $header);
        return $response;
    }

    public function curlPost($type=0, $header=null, $url=null, $data=null) {
        //$output = '';
        if(strpos($url, 'http') === false) {
            $apiUrl = $this->api_base_url.$url;
        } else {
            $apiUrl = $url;
        }
        $this->apiRequestUrl = $apiUrl;

        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $apiUrl);
        
        if($type ==1)
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PROPFIND');
        
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        if($data!=null)
        {
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        }
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($curl);
        curl_close($curl);

        return $output;
    }

    public function curlPut($type=0, $header=null, $url=null, $data=null) {

        if(strpos($url, 'http') === false) {
            $apiUrl = $this->api_base_url.$url;
        } else {
            $apiUrl = $url;
        }
        $this->apiRequestUrl = $apiUrl;
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_URL, $apiUrl);

        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PUT');
        
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        if($data!=null)
        {
            curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        }
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($curl);
        curl_close($curl);

        return $output;
    }

    public function curlGet($requestUrl, $header=null) {
        if(strpos($requestUrl, 'http') === false) {
            $apiUrl = $this->api_base_url.$requestUrl;
        } else {
            $apiUrl = $requestUrl;
        }
        
        $ch   = curl_init();
        curl_setopt($ch, CURLOPT_URL, $apiUrl);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        if(!empty($header)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        }
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FAILONERROR, true);
        curl_setopt($ch, CURLOPT_ENCODING, '');
        curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
        curl_setopt($ch, CURLOPT_TIMEOUT, 0);
        $server_output = curl_exec($ch);
        
        $response = array();
        $response['data'] = $server_output;
        $response['error'] = '';
        if($server_output === false)
        {
            $error = 'Curl error: ' . curl_error($ch);
            $response['error'] = $error;
        }
        $httpstatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curl_errorno =  curl_errno($ch);
        $response['httpstatus'] = $httpstatus;
        $response['errorno'] = $curl_errorno;

        curl_close($ch);

        return $response;
    }


}
