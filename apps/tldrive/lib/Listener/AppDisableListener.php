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

use OCA\TlDrive\AppInfo\Application;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\App\ManagerEvent;
use OCP\IConfig;
use OCA\TlDrive\Service\TldriveService;

/**
 * Class AppDisableListener
 *
 * @package OCA\TlDrive\Listener
 */
class AppDisableListener implements IEventListener {

    /**
     * @var OC\AllConfig
     */
    protected $config;

    private $tldriveService;

	public function __construct(TldriveService $tldriveService) {
		$this->tldriveService = $tldriveService;
	}

	/**
	 * @inheritDoc
	 */
	public function handle(Event $event): void {
		if (!$event instanceof ManagerEvent) {
            return;
        }

        $responseJson = 'default';
        $this->config = \OC::$server[IConfig::class];

	}
}
