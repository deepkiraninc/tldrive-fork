<div class="file-content-upload">
<div class="icon-loading-dark loading_icon"></div>
<input type="hidden" name="dir" value="<?php echo ($_REQUEST['udir'])?$_REQUEST['udir']:'' ?>" id="dir">

<div id="divupload" style="">
	<div class="box box-primary box-solid direct-chat direct-chat-primary collapsed-box">
		<div class="box-header with-border">
			<h3 class="box-title">Upload Files & Folders</h3>
			<div class="box-tools pull-right">
				<!--<button class="btn btn-box-tool " id="isUploadCollapsed" title="Min/Max"><i class="fa fa-plus">_</i></button>
				<button class="btn btn-box-tool" ng-click="$flow.cancel()" id="cancelUpload" title="Close"><i class="fa fa-times">x</i></button>-->
			</div>
		</div>

		<div class="box-body" style="padding: 10px;">
			<div class="box-body" style="display: block;">
				<div id="content" class="app-flowupload" role="main">
					<div ng-app="app" flow-init id="app" flow-prevent-drop ng-style="style" style="">
					  <span class="btn" flow-btn><?= $l->t('Select File'); ?></span>
					  <span class="btn" flow-btn flow-directory ng-show="$flow.supportDirectory"><?= $l->t('Select Folder'); ?></span>

					  <hr class="soften">

					  <div class="alert" flow-drop flow-drag-enter="class='alert-success'" flow-drag-leave="class=''" ng-class="class">
						<?= $l->t('... or drag and drop your files here'); ?>
					  </div>

					  <hr class="soften">

					  <h2><?= $l->t('Transfers'); ?></h2>
					  <p>
						<a class="btn btn-small btn-success" ng-click="$flow.resume()"><?= $l->t('Upload'); ?></a>
						<a class="btn btn-small btn-danger" ng-click="$flow.pause()"><?= $l->t('Pause'); ?></a>
						<a class="btn btn-small btn-info" id="ng_cancelUpload" ng-click="$flow.cancel()"><?= $l->t('Cancel'); ?></a>
						<span class="label label-info"><?= $l->t('Size'); ?>: {{$flow.getSize() | bytes}}</span>
						<span class="label label-info" ng-if="$flow.isUploading()"><?= $l->t('Uploading'); ?>...</span>
					  </p>
					  <table class="table table-hover table-bordered table-striped" flow-transfers>
						<thead>
						<tr>
						  <th style="width:5%">#</th>
						  <th><?= $l->t('Name'); ?></th>
						  <th style="width:10%"><?= $l->t('Size'); ?></th>
						  <th style="width:20%"><?= $l->t('Progress'); ?></th>
						</tr>
						</thead>
						<tbody>
						<tr ng-repeat="file in transfers">
						  <td>{{$index+1}}</td>
						  <td title="UID: {{file.uniqueIdentifier}}">
						  <span ng-if="file.relativePath.length > 55">{{file.relativePath.substring(0,50)}} ... {{file.relativePath.split(".")[file.relativePath.split(".").length-1]}}</span>
						  <span ng-if="file.relativePath.length <= 55">{{file.relativePath}}</span>
						  </td>
						  
						  <td title="Chunks: {{file.chunks.length}}"><span ng-if="file.isUploading()">{{file.size*file.progress() | bytes}}/</span>{{file.size | bytes}}</td>
						  <td>
							<div class="btn-group" ng-if="!file.isComplete() || file.error()">
							  <progress max="1" value="{{file.progress()}}" title="{{file.progress()}}" ng-if="file.isUploading()"></progress>
							  <a class="btn btn-mini btn-warning" ng-click="file.pause()" ng-if="$flow.isUploading()" ng-hide="file.paused">
								<?= $l->t('Pause'); ?>
							  </a>
							  <a class="btn btn-mini btn-warning" ng-click="file.resume()" ng-show="file.paused">
								<?= $l->t('Resume'); ?>
							  </a>
							  <a class="btn btn-mini btn-danger" ng-click="file.cancel()">
								<?= $l->t('Cancel'); ?>
							  </a>
							  <a class="btn btn-mini btn-info" ng-click="file.retry()" ng-show="file.error">
								<?= $l->t('Retry'); ?>
							  </a>
							</div>
							<span ng-if="file.isComplete() && !file.error()"><?= $l->t('Completed'); ?></span>
						  </td>
						</tr>
						</tbody>
					  </table>
					 </div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
<?php
//new
\OCP\Util::addScript('files', 'upload');
\OCP\Util::addScript('files', 'merged-index');
\OCP\Util::addScript('demoapp/flowupload', 'angular');
\OCP\Util::addScript('demoapp/flowupload', 'ng-flow-standalone');
\OCP\Util::addScript('demoapp/flowupload', 'app');
\OCP\Util::addStyle('demoapp/flowupload', 'bootstrap-combined');

\OCP\Util::addScript('demoapp', 'popup-script');
?>