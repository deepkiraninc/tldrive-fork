/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files/src/logger.js":
/*!**********************************!*\
  !*** ./apps/files/src/logger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files').detectUser().build());

/***/ }),

/***/ "./apps/files/src/services/FileAction.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/services/FileAction.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultType: () => (/* binding */ DefaultType),
/* harmony export */   FileAction: () => (/* binding */ FileAction),
/* harmony export */   getFileActions: () => (/* binding */ getFileActions),
/* harmony export */   registerFileAction: () => (/* binding */ registerFileAction)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

var DefaultType;
(function (DefaultType) {
  DefaultType["DEFAULT"] = "default";
  DefaultType["HIDDEN"] = "hidden";
})(DefaultType || (DefaultType = {}));
class FileAction {
  constructor(action) {
    _defineProperty(this, "_action", void 0);
    this.validateAction(action);
    this._action = action;
  }
  get id() {
    return this._action.id;
  }
  get displayName() {
    return this._action.displayName;
  }
  get iconSvgInline() {
    return this._action.iconSvgInline;
  }
  get enabled() {
    return this._action.enabled;
  }
  get exec() {
    return this._action.exec;
  }
  get execBatch() {
    return this._action.execBatch;
  }
  get order() {
    return this._action.order;
  }
  get default() {
    return this._action.default;
  }
  get inline() {
    return this._action.inline;
  }
  get renderInline() {
    return this._action.renderInline;
  }
  validateAction(action) {
    if (!action.id || typeof action.id !== 'string') {
      throw new Error('Invalid id');
    }
    if (!action.displayName || typeof action.displayName !== 'function') {
      throw new Error('Invalid displayName function');
    }
    if (!action.iconSvgInline || typeof action.iconSvgInline !== 'function') {
      throw new Error('Invalid iconSvgInline function');
    }
    if (!action.exec || typeof action.exec !== 'function') {
      throw new Error('Invalid exec function');
    }
    // Optional properties --------------------------------------------
    if ('enabled' in action && typeof action.enabled !== 'function') {
      throw new Error('Invalid enabled function');
    }
    if ('execBatch' in action && typeof action.execBatch !== 'function') {
      throw new Error('Invalid execBatch function');
    }
    if ('order' in action && typeof action.order !== 'number') {
      throw new Error('Invalid order');
    }
    if (action.default && !Object.values(DefaultType).includes(action.default)) {
      throw new Error('Invalid default');
    }
    if ('inline' in action && typeof action.inline !== 'function') {
      throw new Error('Invalid inline function');
    }
    if ('renderInline' in action && typeof action.renderInline !== 'function') {
      throw new Error('Invalid renderInline function');
    }
  }
}
const registerFileAction = function (action) {
  if (typeof window._nc_fileactions === 'undefined') {
    window._nc_fileactions = [];
    _logger__WEBPACK_IMPORTED_MODULE_0__["default"].debug('FileActions initialized');
  }
  // Check duplicates
  if (window._nc_fileactions.find(search => search.id === action.id)) {
    _logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("FileAction ".concat(action.id, " already registered"), {
      action
    });
    return;
  }
  window._nc_fileactions.push(action);
};
const getFileActions = function () {
  return window._nc_fileactions || [];
};

/***/ }),

/***/ "./apps/files_sharing/src/actions/acceptShareAction.ts":
/*!*************************************************************!*\
  !*** ./apps/files_sharing/src/actions/acceptShareAction.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _mdi_svg_svg_check_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/check.svg?raw */ "./node_modules/@mdi/svg/svg/check.svg?raw");
/* harmony import */ var _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/src/services/FileAction */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _views_shares__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/shares */ "./apps/files_sharing/src/views/shares.ts");







const action = new _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__.FileAction({
  id: 'accept-share',
  displayName: nodes => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translatePlural)('files_sharing', 'Accept share', 'Accept shares', nodes.length),
  iconSvgInline: () => _mdi_svg_svg_check_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
  enabled: (nodes, view) => nodes.length > 0 && view.id === _views_shares__WEBPACK_IMPORTED_MODULE_6__.pendingSharesViewId,
  async exec(node) {
    try {
      const isRemote = !!node.attributes.remote;
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/{shareBase}/pending/{id}', {
        shareBase: isRemote ? 'remote_shares' : 'shares',
        id: node.attributes.id
      });
      await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(url);
      // Remove from current view
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:node:deleted', node);
      return true;
    } catch (error) {
      return false;
    }
  },
  async execBatch(nodes, view, dir) {
    return Promise.all(nodes.map(node => this.exec(node, view, dir)));
  },
  order: 1,
  inline: () => true
});
(0,_files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__.registerFileAction)(action);

/***/ }),

/***/ "./apps/files_sharing/src/actions/openInFilesAction.ts":
/*!*************************************************************!*\
  !*** ./apps/files_sharing/src/actions/openInFilesAction.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../files/src/services/FileAction */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _views_shares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/shares */ "./apps/files_sharing/src/views/shares.ts");
/**
 * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



const action = new _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_1__.FileAction({
  id: 'open-in-files',
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'Open in Files'),
  iconSvgInline: () => '',
  enabled: (nodes, view) => [_views_shares__WEBPACK_IMPORTED_MODULE_2__.sharesViewId, _views_shares__WEBPACK_IMPORTED_MODULE_2__.sharedWithYouViewId, _views_shares__WEBPACK_IMPORTED_MODULE_2__.sharedWithOthersViewId, _views_shares__WEBPACK_IMPORTED_MODULE_2__.sharingByLinksViewId
  // Deleted and pending shares are not
  // accessible in the files app.
  ].includes(view.id),
  async exec(node) {
    window.OCP.Files.Router.goToRoute(null,
    // use default route
    {
      view: 'files',
      fileid: node.fileid
    }, {
      dir: node.dirname,
      fileid: node.fileid
    });
    return null;
  },
  // Before openFolderAction
  order: -1000,
  default: _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_1__.DefaultType.HIDDEN
});
(0,_files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_1__.registerFileAction)(action);

/***/ }),

/***/ "./apps/files_sharing/src/actions/rejectShareAction.ts":
/*!*************************************************************!*\
  !*** ./apps/files_sharing/src/actions/rejectShareAction.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _mdi_svg_svg_close_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/close.svg?raw */ "./node_modules/@mdi/svg/svg/close.svg?raw");
/* harmony import */ var _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/src/services/FileAction */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _views_shares__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/shares */ "./apps/files_sharing/src/views/shares.ts");







const action = new _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__.FileAction({
  id: 'reject-share',
  displayName: nodes => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translatePlural)('files_sharing', 'Reject share', 'Reject shares', nodes.length),
  iconSvgInline: () => _mdi_svg_svg_close_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
  enabled: (nodes, view) => {
    if (view.id !== _views_shares__WEBPACK_IMPORTED_MODULE_6__.pendingSharesViewId) {
      return false;
    }
    if (nodes.length === 0) {
      return false;
    }
    // disable rejecting group shares from the pending list because they anyway
    // land back into that same list after rejecting them
    if (nodes.some(node => node.attributes.remote_id && node.attributes.share_type === window.OC.Share.SHARE_TYPE_REMOTE_GROUP)) {
      return false;
    }
    return true;
  },
  async exec(node) {
    try {
      const isRemote = !!node.attributes.remote;
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/{shareBase}/{id}', {
        shareBase: isRemote ? 'remote_shares' : 'shares',
        id: node.attributes.id
      });
      await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete(url);
      // Remove from current view
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:node:deleted', node);
      return true;
    } catch (error) {
      return false;
    }
  },
  async execBatch(nodes, view, dir) {
    return Promise.all(nodes.map(node => this.exec(node, view, dir)));
  },
  order: 2,
  inline: () => true
});
(0,_files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__.registerFileAction)(action);

/***/ }),

/***/ "./apps/files_sharing/src/actions/restoreShareAction.ts":
/*!**************************************************************!*\
  !*** ./apps/files_sharing/src/actions/restoreShareAction.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _mdi_svg_svg_arrow_u_left_top_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/arrow-u-left-top.svg?raw */ "./node_modules/@mdi/svg/svg/arrow-u-left-top.svg?raw");
/* harmony import */ var _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../files/src/services/FileAction */ "./apps/files/src/services/FileAction.ts");
/* harmony import */ var _views_shares__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/shares */ "./apps/files_sharing/src/views/shares.ts");







const action = new _files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__.FileAction({
  id: 'restore-share',
  displayName: nodes => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translatePlural)('files_sharing', 'Restore share', 'Restore shares', nodes.length),
  iconSvgInline: () => _mdi_svg_svg_arrow_u_left_top_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
  enabled: (nodes, view) => nodes.length > 0 && view.id === _views_shares__WEBPACK_IMPORTED_MODULE_6__.deletedSharesViewId,
  async exec(node) {
    try {
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/deletedshares/{id}', {
        id: node.attributes.id
      });
      await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(url);
      // Remove from current view
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:node:deleted', node);
      return true;
    } catch (error) {
      return false;
    }
  },
  async execBatch(nodes, view, dir) {
    return Promise.all(nodes.map(node => this.exec(node, view, dir)));
  },
  order: 1,
  inline: () => true
});
(0,_files_src_services_FileAction__WEBPACK_IMPORTED_MODULE_5__.registerFileAction)(action);

/***/ }),

/***/ "./apps/files_sharing/src/files_sharing.ts":
/*!*************************************************!*\
  !*** ./apps/files_sharing/src/files_sharing.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_shares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/shares */ "./apps/files_sharing/src/views/shares.ts");
/* harmony import */ var _actions_acceptShareAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/acceptShareAction */ "./apps/files_sharing/src/actions/acceptShareAction.ts");
/* harmony import */ var _actions_openInFilesAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/openInFilesAction */ "./apps/files_sharing/src/actions/openInFilesAction.ts");
/* harmony import */ var _actions_rejectShareAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/rejectShareAction */ "./apps/files_sharing/src/actions/rejectShareAction.ts");
/* harmony import */ var _actions_restoreShareAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/restoreShareAction */ "./apps/files_sharing/src/actions/restoreShareAction.ts");
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */





(0,_views_shares__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./apps/files_sharing/src/services/SharingService.ts":
/*!***********************************************************!*\
  !*** ./apps/files_sharing/src/services/SharingService.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents),
/* harmony export */   rootPath: () => (/* binding */ rootPath)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./apps/files_sharing/src/services/logger.ts");
var _getCurrentUser;





const rootPath = "/files/".concat((_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid);
const headers = {
  'Content-Type': 'application/json'
};
const ocsEntryToNode = function (ocsEntry) {
  try {
    var _ocsEntry$tags;
    const isFolder = (ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.item_type) === 'folder';
    const hasPreview = (ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.has_preview) === true;
    const Node = isFolder ? _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Folder : _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.File;
    const fileid = ocsEntry.file_source;
    // Generate path and strip double slashes
    const path = (ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.path) || ocsEntry.file_target;
    const source = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)("dav/".concat(rootPath, "/").concat(path).replaceAll(/\/\//gm, '/'));
    // Prefer share time if more recent than item mtime
    let mtime = ocsEntry !== null && ocsEntry !== void 0 && ocsEntry.item_mtime ? new Date(ocsEntry.item_mtime * 1000) : undefined;
    if ((ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.stime) > ((ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.item_mtime) || 0)) {
      mtime = new Date(ocsEntry.stime * 1000);
    }
    return new Node({
      id: fileid,
      source,
      owner: ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.uid_owner,
      mime: ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.mimetype,
      mtime,
      size: ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.item_size,
      permissions: (ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.item_permissions) || (ocsEntry === null || ocsEntry === void 0 ? void 0 : ocsEntry.permissions),
      root: rootPath,
      attributes: {
        ...ocsEntry,
        'has-preview': hasPreview,
        favorite: ocsEntry !== null && ocsEntry !== void 0 && (_ocsEntry$tags = ocsEntry.tags) !== null && _ocsEntry$tags !== void 0 && _ocsEntry$tags.includes(window.OC.TAG_FAVORITE) ? 1 : 0
      }
    });
  } catch (error) {
    _logger__WEBPACK_IMPORTED_MODULE_4__["default"].error('Error while parsing OCS entry', {
      error
    });
    return null;
  }
};
const getShares = function () {
  let shared_with_me = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/shares');
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(url, {
    headers,
    params: {
      shared_with_me,
      include_tags: true
    }
  });
};
const getSharedWithYou = function () {
  return getShares(true);
};
const getSharedWithOthers = function () {
  return getShares();
};
const getRemoteShares = function () {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/remote_shares');
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(url, {
    headers,
    params: {
      include_tags: true
    }
  });
};
const getPendingShares = function () {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/shares/pending');
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(url, {
    headers,
    params: {
      include_tags: true
    }
  });
};
const getRemotePendingShares = function () {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/remote_shares/pending');
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(url, {
    headers,
    params: {
      include_tags: true
    }
  });
};
const getDeletedShares = function () {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/deletedshares');
  return _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(url, {
    headers,
    params: {
      include_tags: true
    }
  });
};
const getContents = async function () {
  var _getCurrentUser2;
  let sharedWithYou = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  let sharedWithOthers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let pendingShares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let deletedshares = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let filterTypes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  const promises = [];
  if (sharedWithYou) {
    promises.push(getSharedWithYou(), getRemoteShares());
  }
  if (sharedWithOthers) {
    promises.push(getSharedWithOthers());
  }
  if (pendingShares) {
    promises.push(getPendingShares(), getRemotePendingShares());
  }
  if (deletedshares) {
    promises.push(getDeletedShares());
  }
  const responses = await Promise.all(promises);
  const data = responses.map(response => response.data.ocs.data).flat();
  let contents = data.map(ocsEntryToNode).filter(node => node !== null);
  if (filterTypes.length > 0) {
    contents = contents.filter(node => {
      var _node$attributes;
      return filterTypes.includes((_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.share_type);
    });
  }
  return {
    folder: new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Folder({
      id: 0,
      source: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav' + rootPath),
      owner: ((_getCurrentUser2 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()) === null || _getCurrentUser2 === void 0 ? void 0 : _getCurrentUser2.uid) || null
    }),
    contents
  };
};

/***/ }),

/***/ "./apps/files_sharing/src/services/logger.ts":
/*!***************************************************!*\
  !*** ./apps/files_sharing/src/services/logger.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright Copyright (c) 2022 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files_sharing').detectUser().build());

/***/ }),

/***/ "./apps/files_sharing/src/views/shares.ts":
/*!************************************************!*\
  !*** ./apps/files_sharing/src/views/shares.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deletedSharesViewId: () => (/* binding */ deletedSharesViewId),
/* harmony export */   pendingSharesViewId: () => (/* binding */ pendingSharesViewId),
/* harmony export */   sharedWithOthersViewId: () => (/* binding */ sharedWithOthersViewId),
/* harmony export */   sharedWithYouViewId: () => (/* binding */ sharedWithYouViewId),
/* harmony export */   sharesViewId: () => (/* binding */ sharesViewId),
/* harmony export */   sharingByLinksViewId: () => (/* binding */ sharingByLinksViewId)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_account_clock_svg_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdi/svg/svg/account-clock.svg?raw */ "./node_modules/@mdi/svg/svg/account-clock.svg?raw");
/* harmony import */ var _mdi_svg_svg_account_group_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/account-group.svg?raw */ "./node_modules/@mdi/svg/svg/account-group.svg?raw");
/* harmony import */ var _mdi_svg_svg_account_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/account.svg?raw */ "./node_modules/@mdi/svg/svg/account.svg?raw");
/* harmony import */ var _mdi_svg_svg_delete_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/delete.svg?raw */ "./node_modules/@mdi/svg/svg/delete.svg?raw");
/* harmony import */ var _mdi_svg_svg_link_svg_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/svg/svg/link.svg?raw */ "./node_modules/@mdi/svg/svg/link.svg?raw");
/* harmony import */ var _mdi_svg_svg_account_plus_svg_raw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/svg/svg/account-plus.svg?raw */ "./node_modules/@mdi/svg/svg/account-plus.svg?raw");
/* harmony import */ var _services_SharingService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/SharingService */ "./apps/files_sharing/src/services/SharingService.ts");








const sharesViewId = 'shareoverview';
const sharedWithYouViewId = 'sharingin';
const sharedWithOthersViewId = 'sharingout';
const sharingByLinksViewId = 'sharinglinks';
const deletedSharesViewId = 'deletedshares';
const pendingSharesViewId = 'pendingshares';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const Navigation = window.OCP.Files.Navigation;
  Navigation.register({
    id: sharesViewId,
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Shares'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Overview of shared files.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'No shares'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Files and folders you shared or have been shared with you will show up here'),
    icon: _mdi_svg_svg_account_plus_svg_raw__WEBPACK_IMPORTED_MODULE_6__,
    order: 20,
    columns: [],
    getContents: () => (0,_services_SharingService__WEBPACK_IMPORTED_MODULE_7__.getContents)()
  });
  Navigation.register({
    id: sharedWithYouViewId,
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Shared with you'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'List of files that are shared with you.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Nothing shared with you yet'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Files and folders others shared with you will show up here'),
    icon: _mdi_svg_svg_account_svg_raw__WEBPACK_IMPORTED_MODULE_3__,
    order: 1,
    parent: sharesViewId,
    columns: [],
    getContents: () => (0,_services_SharingService__WEBPACK_IMPORTED_MODULE_7__.getContents)(true, false, false, false)
  });
  Navigation.register({
    id: sharedWithOthersViewId,
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Shared with others'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'List of files that you shared with others.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Nothing shared yet'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Files and folders you shared will show up here'),
    icon: _mdi_svg_svg_account_group_svg_raw__WEBPACK_IMPORTED_MODULE_2__,
    order: 2,
    parent: sharesViewId,
    columns: [],
    getContents: () => (0,_services_SharingService__WEBPACK_IMPORTED_MODULE_7__.getContents)(false, true, false, false)
  });
  Navigation.register({
    id: sharingByLinksViewId,
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Shared by link'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'List of files that are shared by link.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'No shared links'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Files and folders you shared by link will show up here'),
    icon: _mdi_svg_svg_link_svg_raw__WEBPACK_IMPORTED_MODULE_5__,
    order: 3,
    parent: sharesViewId,
    columns: [],
    getContents: () => (0,_services_SharingService__WEBPACK_IMPORTED_MODULE_7__.getContents)(false, true, false, false, [window.OC.Share.SHARE_TYPE_LINK])
  });
  Navigation.register({
    id: deletedSharesViewId,
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Deleted shares'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'List of shares you left.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'No deleted shares'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Shares you have left will show up here'),
    icon: _mdi_svg_svg_delete_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
    order: 4,
    parent: sharesViewId,
    columns: [],
    getContents: () => (0,_services_SharingService__WEBPACK_IMPORTED_MODULE_7__.getContents)(false, false, false, true)
  });
  Navigation.register({
    id: pendingSharesViewId,
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Pending shares'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'List of unapproved shares.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'No pending shares'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_sharing', 'Shares you have received but not approved will show up here'),
    icon: _mdi_svg_svg_account_clock_svg_raw__WEBPACK_IMPORTED_MODULE_1__,
    order: 5,
    parent: sharesViewId,
    columns: [],
    getContents: () => (0,_services_SharingService__WEBPACK_IMPORTED_MODULE_7__.getContents)(false, false, true, false)
  });
});

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/account-clock.svg?raw":
/*!*********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/account-clock.svg?raw ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-account-clock\" viewBox=\"0 0 24 24\"><path d=\"M10.63,14.1C12.23,10.58 16.38,9.03 19.9,10.63C23.42,12.23 24.97,16.38 23.37,19.9C22.24,22.4 19.75,24 17,24C14.3,24 11.83,22.44 10.67,20H1V18C1.06,16.86 1.84,15.93 3.34,15.18C4.84,14.43 6.72,14.04 9,14C9.57,14 10.11,14.05 10.63,14.1V14.1M9,4C10.12,4.03 11.06,4.42 11.81,5.17C12.56,5.92 12.93,6.86 12.93,8C12.93,9.14 12.56,10.08 11.81,10.83C11.06,11.58 10.12,11.95 9,11.95C7.88,11.95 6.94,11.58 6.19,10.83C5.44,10.08 5.07,9.14 5.07,8C5.07,6.86 5.44,5.92 6.19,5.17C6.94,4.42 7.88,4.03 9,4M17,22A5,5 0 0,0 22,17A5,5 0 0,0 17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/account-group.svg?raw":
/*!*********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/account-group.svg?raw ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-account-group\" viewBox=\"0 0 24 24\"><path d=\"M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/account-plus.svg?raw":
/*!********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/account-plus.svg?raw ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-account-plus\" viewBox=\"0 0 24 24\"><path d=\"M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/account.svg?raw":
/*!***************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/account.svg?raw ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-account\" viewBox=\"0 0 24 24\"><path d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/arrow-u-left-top.svg?raw":
/*!************************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/arrow-u-left-top.svg?raw ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-arrow-u-left-top\" viewBox=\"0 0 24 24\"><path d=\"M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/check.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/check.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-check\" viewBox=\"0 0 24 24\"><path d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/close.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/close.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-close\" viewBox=\"0 0 24 24\"><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/delete.svg?raw":
/*!**************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/delete.svg?raw ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-delete\" viewBox=\"0 0 24 24\"><path d=\"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/link.svg?raw":
/*!************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/link.svg?raw ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-link\" viewBox=\"0 0 24 24\"><path d=\"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z\" /></svg>";

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3e83":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?19e6":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0cc0":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?aeb7":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"files_sharing-files_sharing": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files_sharing/src/files_sharing.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files_sharing-files_sharing.js.map?v=3c0d608fd59a76f62b22