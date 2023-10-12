<?php
$viewURL = '';
if(isset($_['data']) && is_array($_['data'])) {
    if(isset($_['data']['view_url']) && !empty($_['data']['view_url'])) {
        $viewURL = $_['data']['view_url'];
    }
}
?>

<div id="app">
  <div id="app-content">
    <div id="app-content-wrapper">
      <form method="post" name="login" action="<?php echo $viewURL; ?>">
        <input type="hidden" name="ttlogin" value="tt">
        <input type="hidden" name="fileid" value="2968437">
        <input type="text" name="user" id="user" placeholder="Username or email" aria-label="Username or email" value="" autofocus="" autocomplete="on" autocapitalize="none" autocorrect="off" required="">
        <input type="password" name="password" id="password" value="" placeholder="Password" aria-label="Password" autocomplete="on" autocapitalize="none" autocorrect="off" required="">
        <input type="submit" id="submit" class="login primary" title="" value="Log in">      
      </form>
    </div>
  </div>
</div>