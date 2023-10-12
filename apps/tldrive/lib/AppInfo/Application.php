<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: TlDrive <ashokbc@teamlocus.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\TlDrive\AppInfo;

use OCP\App\ManagerEvent;
use OCA\TlDrive\Capabilities;
use OCA\TlDrive\DirectEditingCapabilities;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;

use OCP\AppFramework\App;
use OCP\EventDispatcher\Event;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Notification\IManager;

use OCP\Util;
use OCP\INavigationManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use OCP\IServerContainer;
use OCP\AppFramework\Http\RedirectResponse;
use Psr\Container\ContainerInterface;
use OCP\IURLGenerator;
use OCA\TlDrive\Service\ConfigProxy;
use OCA\TlDrive\Service\TldriveService;
use OCP\IConfig;
use OCP\IUserManager;
use OCP\IUser;
use OCP\IUserSession;
use OC\Files\Filesystem;
use OC\Files\Node\File;

use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCP\User\Events\BeforeUserLoggedInEvent;
use OCA\TlDrive\Listener\AppEnableListener;
use OCA\TlDrive\Listener\AppDisableListener;
use OCA\TlDrive\Listener\BeforeUserLoggedInListener;
use OCA\TlDrive\Listener\LoadAdditionalListener;


class Application extends App implements IBootstrap 
{
	public const APP_ID = 'tldrive';
	public const APP_NAME = 'Tl Drive';

	/**
     * @var OC\AllConfig
     */
    protected $config;

    /** @var IUserSession */
    private $userSession;

    /** @var INavigationManager */
    private $navigationManager;

    /** @var IURLGenerator */
    private $urlGenerator;

	public function __construct() {
		parent::__construct(self::APP_ID);

		/** @var INavigationManager */
        //$this->navigationManager = \OC::$server->get(INavigationManager::class);
        $this->urlGenerator = \OC::$server->get(IURLGenerator::class);
        $this->config = \OC::$server[IConfig::class];
	}

	public function register(IRegistrationContext $context): void {
        $this->addEventListener($context);
    }

	public function boot(IBootContext $context): void {
        $serverContainer = $context->getServerContainer();

        $this->registerCollaborationResourceProvider($serverContainer);

        /** @var IManager $manager */
        $manager = $context->getAppContainer()->query(IManager::class);
        $this->userSession = $serverContainer->get(IUserSession::class);
        
        //$this->registerHooks($context->getServerContainer());

        /*Top menu icons*/
        \OC::$server->getNavigationManager()->add(array(
            'id'    => 'tldrive',
            'order' => 74,
            'href' 	=> "javascript:void(0)",
            'icon' => \OC::$server->getURLGenerator()->imagePath(self::APP_ID, 'upload-white.svg'),
            'name'  => 'Upload'
        ));

        \OC::$server->getNavigationManager()->add(array(
            'id'    => 'reloadapp',
            'order' => 75,
            'href' 	=> "javascript:void(0)",
            'icon' => \OC::$server->getURLGenerator()->imagePath(self::APP_ID, 'mount-white.svg'),
            'name'  => 'Reload'
        ));

        \OC::$server->getNavigationManager()->add(array(
            'id'    => 'refreshfile',
            'order' => 76,
            'href' 	=> "javascript:void(0)",
            'icon' => \OC::$server->getURLGenerator()->imagePath(self::APP_ID, 'reload-white.svg'),
            'name'  => 'Refresh'
        ));
        
    }

	public function addEventListener(IRegistrationContext $context) {
		//$context->registerCapability(Capabilities::class);
        //$context->registerCapability(DirectEditingCapabilities::class);
        $context->registerEventListener(LoadAdditionalScriptsEvent::class, LoadAdditionalListener::class);

        $context->registerEventListener(BeforeUserLoggedInEvent::class, BeforeUserLoggedInListener::class);
        
        $context->registerEventListener(ManagerEvent::EVENT_APP_ENABLE, AppEnableListener::class);
        $context->registerEventListener(ManagerEvent::EVENT_APP_DISABLE, AppDisableListener::class);        

    }

	protected function registerCollaborationResourceProvider(IServerContainer $server): void {
        Util::addStyle(self::APP_ID, 'tldrive');
        //Util::addScript(self::APP_ID, 'popup-script');
        //Util::addStyle(self::APP_ID, 'emoji');
        //Util::addStyle('files', 'upload');
	}

    /**
     * Checks if this app is enabled.
     */
    protected function isEnabled(): bool {
        $enabled = true;
        $isForced = (bool) $this->config->getAppValue(self::APP_ID, 'force', '0');

        if (null !== $this->user && !$isForced) {
            $enabled = (bool) $this->config->getUserValue(
                $this->user->getUid(),
                self::APP_ID,
                'enabled',
                $this->config->getAppValue(
                    self::APP_ID,
                    'default-enabled',
                    '1'
                )
            );
        }

        return $enabled;
    }
}
