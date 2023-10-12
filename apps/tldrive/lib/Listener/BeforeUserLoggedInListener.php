<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2020, Georg Ehrke
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\TlDrive\Listener;

use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\User\Events\BeforeUserLoggedInEvent;
use OCP\App\ManagerEvent;
use OCP\IUserManager;
use OCA\TlDrive\Service\TldriveService;

use OCP\Security\ICredentialsManager;
use OCP\Authentication\LoginCredentials\IStore;
use OCP\IUserSession;

/**
 * Class UserLoggedInListener
 *
 * @package OCA\TlDrive\Listener
 */
class BeforeUserLoggedInListener implements IEventListener {


    /** @var IStore */
    private $credentialStore;

    private $tldriveService;

	public function __construct(TldriveService $tldriveService) {
        $this->tldriveService = $tldriveService;
	}

	/**
	 * @inheritDoc
	 */
	public function handle(Event $event): void {
		if (!($event instanceof BeforeUserLoggedInEvent)) {
            //$myfile = file_put_contents('/var/www/html/nextcloud_23/data/user_logged_in.txt', "testing...".PHP_EOL , FILE_APPEND | LOCK_EX);
			// Unrelated
			return;
		}

        $userName = $event->getUsername();
        $password = $event->getPassword();
        $backend = $event->getBackend();


        try {

        } catch(\Exception $e) {
           
        }
	}
}
