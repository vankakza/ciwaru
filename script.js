(function(){
    var script = {
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "layout": "absolute",
 "width": "100%",
 "class": "Player",
 "scripts": {
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } }
 },
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minHeight": 20,
 "height": "100%",
 "shadow": false,
 "contentOpaque": false,
 "minWidth": 20,
 "borderRadius": 0,
 "borderSize": 0,
 "definitions": [{
 "initialPosition": {
  "yaw": 99.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8D650AA_8EC8_5682_41D2_E3BF0A29B8DF",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 104.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABC92C94_8EC8_4E86_41AC_FAFB86B10FAF",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_camera"
  },
  {
   "media": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_camera"
  },
  {
   "media": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_camera"
  },
  {
   "media": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_camera"
  },
  {
   "media": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_camera"
  },
  {
   "media": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_camera"
  },
  {
   "media": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301_camera"
  },
  {
   "media": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_camera"
  },
  {
   "media": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_camera"
  },
  {
   "media": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36_camera"
  },
  {
   "media": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_camera"
  },
  {
   "media": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_camera"
  },
  {
   "media": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_camera"
  },
  {
   "media": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_camera"
  },
  {
   "media": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_camera"
  },
  {
   "media": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_camera"
  },
  {
   "media": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_camera"
  },
  {
   "media": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_camera"
  },
  {
   "media": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B_camera"
  },
  {
   "media": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_camera"
  },
  {
   "media": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_camera"
  },
  {
   "media": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_camera"
  },
  {
   "media": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_camera"
  },
  {
   "media": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_camera"
  },
  {
   "media": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_camera"
  },
  {
   "media": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_camera"
  },
  {
   "media": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_camera"
  },
  {
   "media": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_camera"
  },
  {
   "media": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_camera"
  },
  {
   "media": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_0.jpg",
   "width": 1599,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_990E1128_88EA_74D3_41BD_01424F88907F",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -43.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 140.86,
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1"
  },
  {
   "yaw": 0.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -177.43,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  },
  {
   "yaw": 178.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -171.53,
   "panorama": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41"
  }
 ],
 "label": "20220924_195203_098",
 "id": "panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
 "overlays": [
  "this.overlay_95898ACD_830E_58A1_41D0_7DC2BDF3582F",
  "this.overlay_95C13F70_830A_587E_41D4_9C34089C0BF4",
  "this.overlay_9C0E71A1_830A_68E1_41C6_3DD92D5EB57D"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_t.jpg"
},
{
 "initialPosition": {
  "yaw": 172.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF6B96C5_8EC8_5A87_41D5_C2AB59763612",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -69.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A901B2CD_8EC8_5A86_41C6_C95892639EB7",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_99058118_88EA_74F4_41D5_0DA518A3C70A",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -179.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8476E49_8EC8_4D8E_41C9_C92BAE3AB5E1",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -95.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 157.14,
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C"
  },
  {
   "yaw": 2.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 179.23,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  }
 ],
 "label": "20220924_200301_218",
 "id": "panorama_952174CE_845F_AA7D_4197_5A4479805A36",
 "overlays": [
  "this.overlay_97746CFD_843E_7A1F_41CF_30FBEB717884",
  "this.overlay_968E7734_843E_B62D_41E0_837FF5911C13",
  "this.popup_96593F33_843E_562B_41D0_385A5AB13213",
  "this.overlay_9658FA76_843A_5E2D_41BD_FEB75CB8EBD4"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -162.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -75.39,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  },
  {
   "yaw": -162.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -75.39,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  }
 ],
 "label": "20220924_195505_944",
 "id": "panorama_98A603D9_88DB_DB74_41DF_0575075AA24B",
 "overlays": [
  "this.overlay_9F2E7BCD_8B29_CB6C_41DF_D7B1DD87E978"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_t.jpg"
},
{
 "initialPosition": {
  "yaw": 78.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF0FA79F_8EC8_5A82_41DC_DB55B890F6E8",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -148.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AA9EF948_8EC9_B78E_41C9_BD61C760D0D6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -2.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8C1608B_8EC8_5682_41D9_83254B1ED63F",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 91.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -77.84,
   "panorama": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B"
  },
  {
   "yaw": 140.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -43.27,
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91"
  },
  {
   "yaw": -88.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 88.45,
   "panorama": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353"
  }
 ],
 "label": "20220924_195011_854",
 "id": "panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
 "overlays": [
  "this.overlay_9D2911B5_83F6_28E6_41DD_CF0FB4359403",
  "this.overlay_A1A0513D_83FA_29E6_41D1_803C16F09EC4",
  "this.overlay_A1B25591_83F9_E8A1_419A_C4351D5BE9B4",
  "this.overlay_9466D3FA_84E9_AE25_41D0_5245D750B4D3",
  "this.popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_t.jpg"
},
{
 "initialPosition": {
  "yaw": 66.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A85A0EE5_8EC8_4A86_41D4_7062BB47B813",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D39BC1_843A_7E66_41C9_8186710E503B_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -174.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF623696_8EC8_5A82_4158_5EC708385A24",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 11.28,
 "rotationZ": 0,
 "yaw": 83.54,
 "pitch": -0.75
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_9902B118_88EA_74F4_41D3_E963423E8B4A",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_932C01FA_8E47_B68D_41DA_2333FA2A5357",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_1.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 770
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 6.62,
 "rotationZ": 0,
 "yaw": -89.83,
 "pitch": 1.96
},
{
 "initialPosition": {
  "yaw": 130.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB316C17_8EC8_4D82_41C7_92C1355DF2F6",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_96593F33_843E_562B_41D0_385A5AB13213",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 7.1,
 "rotationZ": 0,
 "yaw": 89.87,
 "pitch": 2.85
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -95.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 25.34,
   "panorama": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D"
  },
  {
   "yaw": -171.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -2.94,
   "panorama": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE"
  }
 ],
 "label": "20220924_195250_878",
 "id": "panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
 "overlays": [
  "this.overlay_93E9A7CF_833A_28A1_41C3_E1EF628E8217",
  "this.overlay_945F1682_84DA_56E5_41D0_78FA20E7D708",
  "this.popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E",
  "this.overlay_90769B22_8EB8_4B82_41C4_0C0249B6A7A7"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_99040118_88EA_74F4_41DE_95F85E4B11AC",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -12.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A972E29E_8EC8_5A82_41DF_274EC16BD355",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 110.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -81.27,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  },
  {
   "yaw": -77.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 91.71,
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1"
  }
 ],
 "label": "20220924_194942_647",
 "id": "panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
 "overlays": [
  "this.overlay_91659EC8_830F_F8AF_41C7_55B995C048A5",
  "this.overlay_9EDB1863_8316_5861_41DB_344037ECEB0F",
  "this.overlay_94193F2B_8439_B63A_41B6_8B27418B1960",
  "this.popup_95B380BC_843A_AA1D_41B0_87F00960FA9F"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_959A3FDA_8426_D665_41D4_57551BAB0C04",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 9.19,
 "rotationZ": 0,
 "yaw": 151.91,
 "pitch": 4.32
},
{
 "levels": [
  {
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_991C0108_88EA_74D4_41D1_1672653AE3E2",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -165.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF4C45BB_8EC8_5E82_41A2_D3D70EC16BFD",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -30.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF25D84B_8EC8_5582_41AF_38FEF3438A6A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -154.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABEC5CF2_8EC8_4E9D_41D7_6C14240A46A8",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_0.jpg",
   "width": 1599,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_A1CA15F5_83FA_2861_41CC_79E8CC2B9E81",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_0.jpg",
   "width": 1599,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_9900C128_88EA_74D3_41B3_873551BB7AF1",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -165.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AAB899F4_8EC9_B686_417F_53643ADA5F1E",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_camera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_99010128_88EA_74D3_41CC_5D7079CF4AEA",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -179.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A916D2FC_8EC8_5A86_41C3_12A63A2A537B",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_9901F128_88EA_74D3_4199_EC59552DC909",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_9424979F_84EE_761B_41A5_CA2074F40C71",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 3.54,
 "rotationZ": 0,
 "yaw": -33.13,
 "pitch": 1.43
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 10.95,
 "rotationZ": 0,
 "yaw": 89.27,
 "pitch": 2.41
},
{
 "initialPosition": {
  "yaw": -0.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABA6BDDC_8EC8_4E86_41D8_8A30CD056959",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "touchControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeEnabled": true
},
{
 "initialPosition": {
  "yaw": 8.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AAB5D9B6_8EC9_B685_41B8_4B3D0B01F6FC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 177.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABF0BD30_8EC8_4F9E_41C2_FCED35FF543F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 179.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF510619_8EC8_5D8E_41AD_8EBC49995D72",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -20.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8A8E1B4_8EC8_5686_41C2_CCAA4FE303CA",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -7.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -165.39,
   "panorama": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC"
  },
  {
   "yaw": -104.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -49.09,
   "panorama": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422"
  },
  {
   "yaw": -45.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 7.82,
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C"
  }
 ],
 "label": "20220924_200226_063",
 "id": "panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
 "overlays": [
  "this.overlay_90AE27D5_8429_D66E_41E0_1E33CAF44982",
  "this.overlay_99C744B2_88FA_3D34_41D5_E3A287435216",
  "this.overlay_99CE9E03_88E6_4CD5_41D4_6C303D5772FC"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_t.jpg"
},
{
 "initialPosition": {
  "yaw": 140.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF17B7CE_8EC8_5A82_41D9_629B9D424409",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -113.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 31.57,
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  }
 ],
 "label": "20220924_200455_136",
 "id": "panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE",
 "overlays": [
  "this.overlay_9E608C4E_837E_FFA3_41DC_30BB51ED3964",
  "this.overlay_9EAC980E_837A_67A3_41E0_4507153B3DB9",
  "this.popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A",
  "this.overlay_94CD6065_8427_AA2F_41DB_78DF63BACC30",
  "this.popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_t.jpg"
},
{
 "initialPosition": {
  "yaw": -74.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB809D5F_8EC8_4F82_41DE_3364BEC6E3D4",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FC9D75B_831A_E9A1_4196_45134C057301_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF71F6F3_8EC8_5A82_41DF_DA9FE3FCB714",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -1.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF5E5638_8EC8_5D8E_41BB_FDE2D078AF94",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -177.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A898B185_8EC8_5686_41D3_B8059B2B5F33",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -171.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A935C35A_8EC8_5B82_41E0_AC3ADAFF8368",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 75.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A94EB212_8EC8_5582_41E0_604AE065989A",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -147.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABB6DE0B_8EC8_4D82_41C9_2164C2008BDF",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AAA3B977_8EC9_B782_41CC_B6F242951FB5",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -101.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 14.21,
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  },
  {
   "yaw": -75.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -162.94,
   "panorama": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B"
  },
  {
   "yaw": 105.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -0.53,
   "panorama": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228"
  }
 ],
 "label": "20220924_195543_031",
 "id": "panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
 "overlays": [
  "this.overlay_997D06AE_8B26_FD2C_41DA_8EF8AF7C85D9",
  "this.overlay_9ECFC5C8_8B2A_5F54_41B1_3116589886F4",
  "this.overlay_9D39AA30_8B2F_F534_41A4_A738FD6E4724"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 3.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -39.27,
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  },
  {
   "yaw": 159.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 75.2,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  }
 ],
 "label": "20220924_195445_108",
 "id": "panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D",
 "overlays": [
  "this.overlay_9B3EF73E_88DE_FB2C_41D1_B0F84D03E415",
  "this.overlay_9B253687_88DA_5DDC_41DA_B885E27834D7"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -4.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A95F1231_8EC8_559E_41D5_94E543593D43",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 0.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -3.8,
   "panorama": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270"
  },
  {
   "yaw": 179.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 2.37,
   "panorama": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36"
  },
  {
   "yaw": 75.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 159.75,
   "panorama": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D"
  },
  {
   "yaw": -130.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 102.27,
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C"
  }
 ],
 "label": "20220924_200347_680",
 "id": "panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
 "overlays": [
  "this.overlay_951F6983_843E_7AEB_419F_D3A04A36B9A3",
  "this.overlay_972C6E21_843E_5626_41D5_DD12A0A2F666",
  "this.overlay_947F8324_8E49_DB85_41DF_5BEB919B812E",
  "this.overlay_AF934478_8EC8_5D8E_41A0_081CB614E3E0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_t.jpg"
},
{
 "initialPosition": {
  "yaw": -172.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB3A1C55_8EC8_4D86_41C7_584528D70317",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 138.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 32.45,
   "panorama": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B"
  }
 ],
 "label": "20220924_195747_016",
 "id": "panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
 "overlays": [
  "this.overlay_87205CBF_88DE_CD2D_419D_D82C845B2D75"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 31.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -113.44,
   "panorama": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE"
  },
  {
   "yaw": -146.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -170.09,
   "panorama": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5"
  },
  {
   "yaw": 167.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -83.16,
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301"
  }
 ],
 "label": "20220924_200433_335",
 "id": "panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
 "overlays": [
  "this.overlay_9B3ABF1A_830A_79A2_41D4_0F95A9C883B8",
  "this.overlay_9B807B33_830A_59E2_41CD_A46BDAFC5D94",
  "this.overlay_AE402DE3_8EB8_4E82_41D5_F9916B18B644"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 14.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 5.2,
   "panorama": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B"
  },
  {
   "yaw": -165.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -7.89,
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C"
  }
 ],
 "label": "20220924_200208_780",
 "id": "panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
 "overlays": [
  "this.overlay_90B574D9_842E_EA67_41DD_5205EB757A7A",
  "this.overlay_90A6F78F_842E_56FB_41C9_CFF8FCD126F7"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -7.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 149.45,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  },
  {
   "yaw": 25.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -95.05,
   "panorama": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9"
  }
 ],
 "label": "20220924_195404_934",
 "id": "panorama_8E107CBE_8316_38E3_41C2_E75776DA228D",
 "overlays": [
  "this.overlay_90B8BEAE_8E48_CA82_41DE_1037F8E0C36A",
  "this.overlay_ACBDF29C_8EBB_DA86_41D9_5F3E306A9154"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 84.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF22B88A_8EC8_568D_41B1_BF1CAA9A75AA",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 172.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A927732B_8EC8_5B82_41CF_FD48072E8A74",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 8.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 0.93,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  },
  {
   "yaw": -80.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 89.6,
   "panorama": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9"
  }
 ],
 "label": "20220924_194857_352",
 "id": "panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
 "overlays": [
  "this.overlay_8DB0CC06_831E_5FA3_41D4_4AB13D5203C4",
  "this.overlay_9698FDA4_830A_78E7_4150_DE60ADBEAC42",
  "this.overlay_9585024A_84FA_AE65_41DD_AE42C9B582A3",
  "this.popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_t.jpg"
},
{
 "initialPosition": {
  "yaw": -77.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8BEA1E3_8EC8_5682_41E0_93748074B637",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 7.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -45.27,
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C"
  },
  {
   "yaw": 157.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -95.41,
   "panorama": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36"
  },
  {
   "yaw": 102.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -130.37,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  }
 ],
 "label": "20220924_200243_964",
 "id": "panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
 "overlays": [
  "this.overlay_97BAB650_842A_7665_41B3_698B0812037B",
  "this.overlay_98EE00A7_88EE_35DC_41D0_DBD71F5B96B1",
  "this.overlay_91E77166_8EC7_F785_41B0_FF19ABEB6535"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_t.jpg"
},
{
 "initialPosition": {
  "yaw": 8.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB1EFBA9_8EC8_4A8E_41CC_1B30A4083276",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -85.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB7D9B0D_8EC8_4B86_41B7_6209BAB94135",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -171.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 178.01,
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91"
  },
  {
   "yaw": -26.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 138.16,
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301"
  },
  {
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "20220924_195231_019",
 "id": "panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
 "overlays": [
  "this.overlay_9668FDEE_830E_5863_41CC_CE29ECB4842E",
  "this.overlay_99B1FE61_8376_3861_41D7_A4A9EA47A255",
  "this.overlay_94B756C0_84E6_7666_4193_67167020E744",
  "this.popup_941056FE_84E7_F61D_41D0_E8887FE18F61"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_t.jpg"
},
{
 "initialPosition": {
  "yaw": -104.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF1C081C_8EC8_5586_41C0_A8F342C4629C",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -171.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF012761_8EC8_5BBE_41C9_83112DAD6464",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 14.36,
 "rotationZ": 0,
 "yaw": 13.28,
 "pitch": 9.92
},
{
 "levels": [
  {
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_99039118_88EA_74F4_41BA_0157E4DED1F4",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_camera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_0.jpeg",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 963
  },
  {
   "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_1.jpeg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 770
  },
  {
   "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_2.jpeg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_94D1D4B4_8E58_5E86_41E1_37510D940F72",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF46D58C_8EC8_5E86_41D5_B1C12E26F40D",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 136.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A81D5FDF_8EC8_4A82_41DD_EECE89CA6E18",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -81.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 110.86,
   "panorama": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B"
  },
  {
   "yaw": -177.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 0.91,
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91"
  },
  {
   "yaw": 149.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -7.33,
   "panorama": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D"
  },
  {
   "yaw": 0.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 8.06,
   "panorama": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8"
  }
 ],
 "label": "20220924_195101_018",
 "id": "panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
 "overlays": [
  "this.overlay_8DFAA3B8_830A_68EF_41CD_839851AB4F77",
  "this.overlay_9276FB31_830E_F9FE_41C9_7AAF98FB0A95",
  "this.overlay_94421384_831A_28A6_41A7_963184D23B9D",
  "this.overlay_8D98C5D3_831E_68A1_41D0_056881AF7812",
  "this.overlay_9479B2AB_84EE_EE3A_41D3_85C4A5D55FA3",
  "this.popup_9424979F_84EE_761B_41A5_CA2074F40C71"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_t.jpg"
},
{
 "initialPosition": {
  "yaw": 98.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB656AA0_8EC8_4ABE_41E1_3E8FD15956DC",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 14.42,
 "rotationZ": 0,
 "yaw": 7.17,
 "pitch": 8.52
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_952174CE_845F_AA7D_4197_5A4479805A36_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -170.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -146.45,
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  },
  {
   "yaw": 3.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 177.88,
   "panorama": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE"
  }
 ],
 "label": "20220924_195342_428",
 "id": "panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5",
 "overlays": [
  "this.overlay_93BBAF0C_833A_39A6_4189_0D1FA345F6E2",
  "this.overlay_92700DDE_8336_58A3_41DD_59EEB07C8162",
  "this.overlay_979D6A7F_8426_7E1A_41C4_07B1E79B53BA",
  "this.popup_959A3FDA_8426_D665_41D4_57551BAB0C04"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_t.jpg"
},
{
 "initialPosition": {
  "yaw": 49.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8847137_8EC8_5782_41DF_DFA2B3508530",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 2.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB155B6B_8EC8_4B82_4180_C6D44E4ECE20",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 84.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8F47108_8EC8_578E_41DC_EF4BE8C88494",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_95950CC8_845B_DA65_41C0_F5E4D5943128",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 5.74,
 "rotationZ": 0,
 "yaw": -85.15,
 "pitch": 5.91
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 8.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 94.79,
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  }
 ],
 "label": "20220924_195602_730",
 "id": "panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4",
 "overlays": [
  "this.overlay_9250D689_8E48_5A8E_41E0_5F3F3FB28577"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_t.jpg"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 88.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -88.3,
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1"
  }
 ],
 "label": "20220924_194920_785",
 "id": "panorama_8F637E4E_8316_3BA2_41D5_288E1A348353",
 "overlays": [
  "this.overlay_9877E7AD_8316_28E1_41DE_8CBF8C19A521",
  "this.overlay_957F1025_84DE_AA2F_41DF_9490224C82BE",
  "this.popup_958305BA_84DE_6A25_41D2_D0594DD18ED0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 5.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 14.2,
   "panorama": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC"
  },
  {
   "yaw": 32.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 138.82,
   "panorama": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148"
  }
 ],
 "label": "20220924_200142_456",
 "id": "panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
 "overlays": [
  "this.overlay_919B825F_842E_AE1B_41DA_80D8B62262AA",
  "this.overlay_986DE224_88DE_74DC_416D_68498BA54455"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -49.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -104.03,
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C"
  }
 ],
 "label": "20220924_195714_326",
 "id": "panorama_977AAA32_843A_BE25_41A0_4F2B758AA422",
 "overlays": [
  "this.overlay_9CF65A3F_8426_5E1A_41B7_DC68EA72A2EB",
  "this.overlay_93294F11_85D9_D7E7_41A3_EF92AEEF3AED"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_t.jpg"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 177.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 3.16,
   "panorama": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5"
  },
  {
   "yaw": -2.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -171.72,
   "panorama": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9"
  }
 ],
 "label": "20220924_195317_218",
 "id": "panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
 "overlays": [
  "this.overlay_9305EDE0_8339_D89E_41D6_C407A1CCC52C",
  "this.overlay_903EE7F9_833E_686E_41D7_ADE5B0DC67DC"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_t.jpg"
},
{
 "initialPosition": {
  "yaw": -22.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB908D9D_8EC8_4E86_41B2_771AD653A3C7",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -39.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 3.89,
   "panorama": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D"
  },
  {
   "yaw": 63.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 3.89,
   "panorama": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D"
  },
  {
   "yaw": 94.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 8.81,
   "panorama": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4"
  },
  {
   "yaw": 14.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -101.32,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  }
 ],
 "label": "20220924_195656_668",
 "id": "panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8",
 "overlays": [
  "this.overlay_94E8FA88_8E58_CA8E_41E1_7C03BFDF01E2",
  "this.overlay_9574A477_8E59_FD82_41CC_8BDB6DA0C0D3",
  "this.overlay_AEDCE13A_8E4B_D78D_41DC_1988F1BD3915",
  "this.overlay_9317F9A2_8E48_D6BD_4191_BE04D166CD97"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_t.jpg"
},
{
 "initialPosition": {
  "yaw": -39.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB017B3C_8EC8_4B86_41DC_5253B120951A",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_95B380BC_843A_AA1D_41B0_87F00960FA9F",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 4.03,
 "rotationZ": 0,
 "yaw": -46.07,
 "pitch": 4.09
},
{
 "levels": [
  {
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_9904B118_88EA_74F4_41C6_9158ED6313C5",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -178.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AEBAA55D_8EC8_5F86_41C7_A12B4678F4AD",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -0.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 105.02,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  }
 ],
 "label": "20220924_195523_846",
 "id": "panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228",
 "overlays": [
  "this.overlay_9EB6FC17_8B2A_CCFC_41D6_41ACC88F31AB"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_t.jpg"
},
{
 "initialPosition": {
  "yaw": 91.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB509A61_8EC9_B5BE_41BE_E63BCDD57EEE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -41.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF64D667_8EC8_5D82_41E0_0CCD2597EE6C",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 89.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -80.91,
   "panorama": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8"
  }
 ],
 "label": "20220924_194833_658",
 "id": "panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9",
 "overlays": [
  "this.overlay_8C99CCD2_8319_D8A2_41D3_1763AFFE7AB6",
  "this.overlay_9496458D_84FA_6AFF_41D8_9885E62625AC",
  "this.popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9",
  "this.overlay_946B96F6_8E78_7A82_41C4_8BFDBDA5B3ED",
  "this.popup_932C01FA_8E47_B68D_41DA_2333FA2A5357"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_t.jpg"
},
{
 "initialPosition": {
  "yaw": 96.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A87FBF72_8EC8_4B82_41A3_C8B52D98FC35",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 1.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 175.37,
   "panorama": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270"
  },
  {
   "yaw": 138.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -26.19,
   "panorama": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41"
  },
  {
   "yaw": -83.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 167.12,
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  }
 ],
 "label": "20220924_200410_458",
 "id": "panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
 "overlays": [
  "this.overlay_9B0E735D_8376_69A1_41D9_E0E662CF6BD3",
  "this.overlay_99AFDE47_837A_3BA2_41BC_85A65313E4D6",
  "this.overlay_9AE32E7A_837A_5862_41E0_059B72F1A1C9"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_t.jpg"
},
{
 "initialPosition": {
  "yaw": 14.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB226BD8_8EC8_4A8E_41AC_7D410C1ACAE8",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -4.09
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -41.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB4F1A23_8EC9_B582_41A3_BBAA9A202FC0",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 153.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A96DB260_8EC8_55BE_41D0_B3C8D1DB3DB0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 102.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A80CEFB0_8EC8_4A9E_41DB_3B5A22E0445A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 9.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A869CF24_8EC8_4B86_41E1_2720BC07D14A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 134.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A8E420D9_8EC8_568E_41BF_B69D1BD03C87",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 176.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A88AD166_8EC8_5782_41D6_C3DEF32F1143",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 175.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 1.11,
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301"
  },
  {
   "yaw": -3.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 0.19,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  }
 ],
 "label": "20220924_200325_715",
 "id": "panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
 "overlays": [
  "this.overlay_A35BAD66_830E_5862_41DD_724AF9B82C1A",
  "this.overlay_976A95BF_845A_6A1B_4190_A69985CB027E",
  "this.popup_95950CC8_845B_DA65_41C0_F5E4D5943128",
  "this.overlay_986D155C_88E6_5F6C_41CB_729A4A8BF4B6"
 ],
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "hfov": 360,
 "partial": false,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_t.jpg"
},
{
 "initialPosition": {
  "yaw": 104.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_ABDF9CC3_8EC8_4E83_41D6_A258380B7DD7",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 6.19,
 "rotationZ": 0,
 "yaw": 33.94,
 "pitch": -0.54
},
{
 "initialPosition": {
  "yaw": 17.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF48C5EA_8EC8_5E82_41D3_D20C46EEC48B",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_0.jpg",
   "width": 1599,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "id": "ImageResource_99007128_88EA_74D3_41DE_03A0F1D86789",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_941056FE_84E7_F61D_41D0_E8887FE18F61",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 6.04,
 "rotationZ": 0,
 "yaw": -88.58,
 "pitch": 1.57
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_958305BA_84DE_6A25_41D2_D0594DD18ED0",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 5.2,
 "rotationZ": 0,
 "yaw": 53.02,
 "pitch": -1.4
},
{
 "initialPosition": {
  "yaw": 33.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A830D05C_8EC8_5586_41CC_B62A71934F27",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_0.jpg",
   "width": 4080,
   "class": "ImageResourceLevel",
   "height": 3072
  },
  {
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1542
  },
  {
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 771
  },
  {
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "id": "ImageResource_9904F118_88EA_74F4_41BC_7FB698412E86",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -91.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A823901E_8EC8_5582_41DE_4D51C044A39A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AF79C722_8EC8_5B82_41CF_5AE40484F0F5",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "showEasing": "cubic_in",
 "showDuration": 500,
 "id": "popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E",
 "popupDistance": 100,
 "rotationX": 0,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 771
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 8.66,
 "rotationZ": 0,
 "yaw": 120.29,
 "pitch": -1
},
{
 "initialPosition": {
  "yaw": -90.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_A855FE97_8EC8_4A82_41D3_0A2E87A2D117",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -88.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_AB6EFACF_8EC8_4A82_41BA_73FE1400777C",
 "automaticZoomSpeed": 10
},
{
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "id": "MainViewer",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "width": "100%",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "shadow": false,
 "paddingRight": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "height": "100%",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "borderSize": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "playbackBarHeadOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "right": 0,
 "minHeight": 0,
 "class": "UIComponent",
 "top": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "shadow": false,
 "minWidth": 0,
 "bottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "UIComponent60167"
 },
 "visible": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical"
},
{
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "minHeight": 0,
 "class": "ZoomImage",
 "top": 0,
 "backgroundColor": [],
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "shadow": false,
 "minWidth": 0,
 "bottom": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "backgroundColorRatios": [],
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage60168"
 },
 "visible": false,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical"
},
{
 "iconWidth": 20,
 "paddingLeft": 5,
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "right": 10,
 "fontFamily": "Arial",
 "iconHeight": 20,
 "shadowColor": "#000000",
 "shadowBlurRadius": 6,
 "class": "CloseButton",
 "borderColor": "#000000",
 "iconLineWidth": 5,
 "top": 10,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "pressedIconColor": "#888888",
 "paddingRight": 5,
 "mode": "push",
 "minHeight": 0,
 "shadow": false,
 "minWidth": 0,
 "layout": "horizontal",
 "fontSize": "1.29vmin",
 "borderRadius": 0,
 "shadowSpread": 1,
 "borderSize": 0,
 "label": "",
 "propagateClick": false,
 "paddingTop": 5,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "iconColor": "#000000",
 "fontStyle": "normal",
 "gap": 5,
 "textDecoration": "none",
 "visible": false,
 "data": {
  "name": "CloseButton60169"
 },
 "paddingBottom": 5,
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_AB155B6B_8EC8_4B82_4180_C6D44E4ECE20); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.45,
   "hfov": 17.81
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FFB475_8E58_5D86_41E0_ED50E5DA88DF",
   "yaw": 0.91,
   "pitch": -11.45,
   "hfov": 17.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_95898ACD_830E_58A1_41D0_7DC2BDF3582F",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41, this.camera_AB1EFBA9_8EC8_4A8E_41CC_1B30A4083276); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 178.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.74,
   "hfov": 8.34
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FF6475_8E58_5D86_41D1_55BE87642096",
   "yaw": 178.01,
   "pitch": -12.74,
   "hfov": 8.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_95C13F70_830A_587E_41D4_9C34089C0BF4",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_AB017B3C_8EC8_4B86_41DC_5253B120951A); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -43.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.18,
   "hfov": 12.92
  }
 ],
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FF1475_8E58_5D86_41BB_7172851F0E8A",
   "yaw": -43.27,
   "pitch": -18.18,
   "hfov": 12.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9C0E71A1_830A_68E1_41C6_3DD92D5EB57D",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_ABA6BDDC_8EC8_4E86_41D8_8A30CD056959); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 2.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.2,
   "hfov": 14.43
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F48485_8E58_5E86_41D4_ADDCCF0EC6E1",
   "yaw": 2.37,
   "pitch": -21.2,
   "hfov": 14.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97746CFD_843E_7A1F_41CF_30FBEB717884",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_96593F33_843E_562B_41D0_385A5AB13213, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_9900C128_88EA_74D3_41B3_873551BB7AF1, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 89.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.85,
   "hfov": 7.1
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 89.87,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_1_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.1
  }
 ],
 "id": "overlay_968E7734_843E_B62D_41E0_837FF5911C13",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_AB908D9D_8EC8_4E86_41B2_771AD653A3C7); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -95.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.58,
   "hfov": 11.21
  }
 ],
 "data": {
  "label": "Arrow 05b Left"
 },
 "useHandCursor": true,
 "enabled": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F5E485_8E58_5E86_41B2_9C1675CFCC94",
   "yaw": -95.41,
   "pitch": -4.58,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9658FA76_843A_5E2D_41BD_FEB75CB8EBD4",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_ABDF9CC3_8EC8_4E83_41D6_A258380B7DD7); this.mainPlayList.set('selectedIndex', 13); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -162.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.55,
   "hfov": 19.14
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F7D485_8E58_5E86_41C0_49FB8C149A96",
   "yaw": -162.94,
   "pitch": -24.55,
   "hfov": 19.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9F2E7BCD_8B29_CB6C_41DF_D7B1DD87E978",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_A81D5FDF_8EC8_4A82_41DD_EECE89CA6E18); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 140.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.64,
   "hfov": 16.76
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CC2495_8E58_5E86_41D3_90E6DFC5D61D",
   "yaw": 140.86,
   "pitch": -28.64,
   "hfov": 16.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9D2911B5_83F6_28E6_41DD_CF0FB4359403",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B, this.camera_A80CEFB0_8EC8_4A9E_41DB_3B5A22E0445A); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 91.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.57,
   "hfov": 15.29
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CDD495_8E58_5E86_41C8_684B525D4498",
   "yaw": 91.71,
   "pitch": -17.57,
   "hfov": 15.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1A0513D_83FA_29E6_41D1_803C16F09EC4",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353, this.camera_A823901E_8EC8_5582_41DE_4D51C044A39A); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -88.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.11,
   "hfov": 15.48
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CD7495_8E58_5E86_41C9_C0CC4093AE98",
   "yaw": -88.3,
   "pitch": -15.11,
   "hfov": 15.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1B25591_83F9_E8A1_419A_C4351D5BE9B4",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_9904F118_88EA_74F4_41BC_7FB698412E86, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 33.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_3_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.54,
   "hfov": 6.19
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 33.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_3_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.19
  }
 ],
 "id": "overlay_9466D3FA_84E9_AE25_41D0_5245D750B4D3",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE, this.camera_ABF0BD30_8EC8_4F9E_41C2_FCED35FF543F); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -171.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.35,
   "hfov": 16.4
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CE7495_8E58_5E86_41C3_582F9D0E6D18",
   "yaw": -171.72,
   "pitch": -19.35,
   "hfov": 16.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_93E9A7CF_833A_28A1_41C3_E1EF628E8217",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_99010128_88EA_74D3_41CC_5D7079CF4AEA, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 120.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1,
   "hfov": 8.66
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 120.29,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_2_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.66
  }
 ],
 "id": "overlay_945F1682_84DA_56E5_41D0_78FA20E7D708",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D, this.camera_ABEC5CF2_8EC8_4E9D_41D7_6C14240A46A8); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -95.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.71,
   "hfov": 19.17
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91D3ABD4_8EB8_4A86_41E0_493E8CFCECEC",
   "yaw": -95.05,
   "pitch": -15.71,
   "hfov": 19.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_90769B22_8EB8_4B82_41C4_0C0249B6A7A7",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_AB656AA0_8EC8_4ABE_41E1_3E8FD15956DC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 110.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.16,
   "hfov": 15.72
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CBE495_8E58_5E86_41C1_0A5CC8C4CD69",
   "yaw": 110.86,
   "pitch": -16.16,
   "hfov": 15.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_91659EC8_830F_F8AF_41C7_55B995C048A5",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_AB6EFACF_8EC8_4A82_41BA_73FE1400777C); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -77.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.36,
   "hfov": 20.19
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CB8495_8E58_5E86_41DE_9999C37A481F",
   "yaw": -77.84,
   "pitch": -16.36,
   "hfov": 20.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9EDB1863_8316_5861_41DB_344037ECEB0F",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95B380BC_843A_AA1D_41B0_87F00960FA9F, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_99040118_88EA_74F4_41DE_95F85E4B11AC, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -46.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.09,
   "hfov": 4.03
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": -46.07,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_2_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.09,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.03
  }
 ],
 "id": "overlay_94193F2B_8439_B63A_41B6_8B27418B1960",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC, this.camera_AB226BD8_8EC8_4A8E_41AC_7D410C1ACAE8); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -7.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.91,
   "hfov": 19.38
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F60485_8E58_5E86_41C9_F4E7A4393091",
   "yaw": -7.89,
   "pitch": -22.91,
   "hfov": 19.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90AE27D5_8429_D66E_41E0_1E33CAF44982",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422, this.camera_AB316C17_8EC8_4D82_41C7_92C1355DF2F6); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -104.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.73,
   "hfov": 20.35
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F79485_8E58_5E86_41E0_F2D1F77735FB",
   "yaw": -104.03,
   "pitch": -14.73,
   "hfov": 20.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99C744B2_88FA_3D34_41D5_E3A287435216",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_AB3A1C55_8EC8_4D86_41C7_584528D70317); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -45.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.73,
   "hfov": 14.25
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F74485_8E58_5E86_41D5_13B1B573A9C7",
   "yaw": -45.27,
   "pitch": -41.73,
   "hfov": 14.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_99CE9E03_88E6_4CD5_41D4_6C303D5772FC",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_AA9EF948_8EC9_B78E_41C9_BD61C760D0D6); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -113.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.77,
   "hfov": 20.14
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94C0C495_8E58_5E86_41DF_BBE2F8A07759",
   "yaw": -113.44,
   "pitch": -16.77,
   "hfov": 20.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E608C4E_837E_FFA3_41DC_30BB51ED3964",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_A1CA15F5_83FA_2861_41CC_79E8CC2B9E81, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 7.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.52,
   "hfov": 14.42
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 7.17,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_1_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.42
  }
 ],
 "id": "overlay_9EAC980E_837A_67A3_41E0_4507153B3DB9",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_990E1128_88EA_74D3_41BD_01424F88907F, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 89.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_2_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.41,
   "hfov": 10.95
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 89.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_2_0.png",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.95
  }
 ],
 "id": "overlay_94CD6065_8427_AA2F_41DB_78DF63BACC30",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228, this.camera_AF510619_8EC8_5D8E_41AD_8EBC49995D72); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 105.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.23,
   "hfov": 18.54
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F6E485_8E58_5E86_41CC_CE0A49625A06",
   "yaw": 105.02,
   "pitch": -28.23,
   "hfov": 18.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_997D06AE_8B26_FD2C_41DA_8EF8AF7C85D9",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B, this.camera_AF48C5EA_8EC8_5E82_41D3_D20C46EEC48B); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -75.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.18,
   "hfov": 18.88
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F67485_8E58_5E86_41DD_659D50AA006E",
   "yaw": -75.39,
   "pitch": -26.18,
   "hfov": 18.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9ECFC5C8_8B2A_5F54_41B1_3116589886F4",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8, this.camera_AF4C45BB_8EC8_5E82_41A2_D3D70EC16BFD); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -101.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.5,
   "hfov": 14.52
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F62485_8E58_5E86_41D2_DF70A26BF23E",
   "yaw": -101.32,
   "pitch": -40.5,
   "hfov": 14.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9D39AA30_8B2F_F534_41A4_A738FD6E4724",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_AF1C081C_8EC8_5586_41C0_A8F342C4629C); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 159.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_0_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.73,
   "hfov": 16.56
  }
 ],
 "data": {
  "label": "Circle Point 03b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F57485_8E58_5E86_41AF_00E1D544D2BF",
   "yaw": 159.75,
   "pitch": -19.73,
   "hfov": 16.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B3EF73E_88DE_FB2C_41D1_B0F84D03E415",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8, this.camera_AF17B7CE_8EC8_5A82_41D9_629B9D424409); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 3.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.3,
   "hfov": 25.88
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F53485_8E58_5E86_41D4_CAF83B99E073",
   "yaw": 3.89,
   "pitch": -13.3,
   "hfov": 25.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B253687_88DA_5DDC_41DA_B885E27834D7",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_952174CE_845F_AA7D_4197_5A4479805A36, this.camera_A898B185_8EC8_5686_41D3_B8059B2B5F33); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 179.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.68,
   "hfov": 14.26
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F38485_8E58_5E86_41CC_0E18289B0B57",
   "yaw": 179.23,
   "pitch": -16.68,
   "hfov": 14.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_951F6983_843E_7AEB_419F_D3A04A36B9A3",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270, this.camera_A88AD166_8EC8_5782_41D6_C3DEF32F1143); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.89,
   "hfov": 11.87
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F33485_8E58_5E86_41C9_77E89655358A",
   "yaw": 0.19,
   "pitch": -15.89,
   "hfov": 11.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_972C6E21_843E_5626_41D5_DD12A0A2F666",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D, this.camera_A8A8E1B4_8EC8_5686_41C2_CCAA4FE303CA); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 75.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97,
   "hfov": 18.62
  }
 ],
 "data": {
  "label": "Circle Point 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F4F485_8E58_5E86_41BF_680D852FCC65",
   "yaw": 75.2,
   "pitch": -2.97,
   "hfov": 18.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_947F8324_8E49_DB85_41DF_5BEB919B812E",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_A8BEA1E3_8EC8_5682_41E0_93748074B637); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -130.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.28,
   "hfov": 15.14
  }
 ],
 "data": {
  "label": "Arrow 05c Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A81967E8_8EC8_5A8E_41DF_9F6B68E707F0",
   "yaw": -130.37,
   "pitch": -12.28,
   "hfov": 15.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AF934478_8EC8_5D8E_41A0_081CB614E3E0",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B, this.camera_ABB6DE0B_8EC8_4D82_41C9_2164C2008BDF); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 138.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.41,
   "hfov": 11.48
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CA4495_8E58_5E86_41DF_3038621B5628",
   "yaw": 138.82,
   "pitch": -63.41,
   "hfov": 11.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_87205CBF_88DE_CD2D_419D_D82C845B2D75",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301, this.camera_A87FBF72_8EC8_4B82_41A3_C8B52D98FC35); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 167.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.3,
   "hfov": 11
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CF7495_8E58_5E86_41D1_F89F0F8E453C",
   "yaw": 167.12,
   "pitch": -15.3,
   "hfov": 11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B3ABF1A_830A_79A2_41D4_0F95A9C883B8",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE, this.camera_A85A0EE5_8EC8_4A86_41D4_7062BB47B813); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 31.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.1,
   "hfov": 14.38
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CF4495_8E58_5E86_41D5_10E7D7561992",
   "yaw": 31.57,
   "pitch": -15.1,
   "hfov": 14.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B807B33_830A_59E2_41CD_A46BDAFC5D94",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5, this.camera_A869CF24_8EC8_4B86_41E1_2720BC07D14A); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -146.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.95,
   "hfov": 22.25
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AD689A85_8EB8_4A86_41DC_477B610FC5FE",
   "yaw": -146.45,
   "pitch": -24.95,
   "hfov": 22.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AE402DE3_8EB8_4E82_41D5_F9916B18B644",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B, this.camera_AF623696_8EC8_5A82_4158_5EC708385A24); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 14.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.05,
   "hfov": 19.76
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94C80485_8E58_5E86_41DA_3F698607A234",
   "yaw": 14.2,
   "pitch": -20.05,
   "hfov": 19.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90B574D9_842E_EA67_41DD_5205EB757A7A",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_AF6B96C5_8EC8_5A87_41D5_C2AB59763612); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -165.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.41,
   "hfov": 19.96
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94C9B485_8E58_5E86_41D1_96221250EB44",
   "yaw": -165.39,
   "pitch": -18.41,
   "hfov": 19.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90A6F78F_842E_56FB_41C9_CFF8FCD126F7",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_AF25D84B_8EC8_5582_41AF_38FEF3438A6A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -7.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.25,
   "hfov": 20.77
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AE0E64AB_8E48_DE82_41DA_F7817F6F8D63",
   "yaw": -7.33,
   "pitch": -9.25,
   "hfov": 20.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_90B8BEAE_8E48_CA82_41DE_1037F8E0C36A",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9, this.camera_AF22B88A_8EC8_568D_41B1_BF1CAA9A75AA); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 25.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.58,
   "hfov": 18.17
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91E30BB5_8EB8_4A86_41DE_0E7D47320186",
   "yaw": 25.34,
   "pitch": -10.58,
   "hfov": 18.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_ACBDF29C_8EBB_DA86_41D9_5F3E306A9154",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_A8476E49_8EC8_4D8E_41C9_C92BAE3AB5E1); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 8.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.95,
   "hfov": 20.23
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FBA475_8E58_5D86_41CA_9225F44A9966",
   "yaw": 8.06,
   "pitch": -15.95,
   "hfov": 20.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8DB0CC06_831E_5FA3_41D4_4AB13D5203C4",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9, this.camera_A855FE97_8EC8_4A82_41D3_0A2E87A2D117); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -80.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.39,
   "hfov": 18.91
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FCC475_8E58_5D86_41C7_E0522D391C0F",
   "yaw": -80.91,
   "pitch": -17.39,
   "hfov": 18.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9698FDA4_830A_78E7_4150_DE60ADBEAC42",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_9904B118_88EA_74F4_41C6_9158ED6313C5, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 83.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "hfov": 11.28
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 83.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_2_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 172
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.28
  }
 ],
 "id": "overlay_9585024A_84FA_AE65_41DD_AE42C9B582A3",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_A8E420D9_8EC8_568E_41BF_B69D1BD03C87); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 7.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49,
   "hfov": 14.52
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F69485_8E58_5E86_41D0_E00910AF40B0",
   "yaw": 7.82,
   "pitch": -11.49,
   "hfov": 14.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_97BAB650_842A_7665_41B3_698B0812037B",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_952174CE_845F_AA7D_4197_5A4479805A36, this.camera_A8F47108_8EC8_578E_41DC_EF4BE8C88494); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 157.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_1_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.22,
   "hfov": 4.91
  }
 ],
 "data": {
  "label": "Arrow 05c Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 157.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_1_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.91
  }
 ],
 "id": "overlay_98EE00A7_88EE_35DC_41D0_DBD71F5B96B1",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_A8847137_8EC8_5782_41DF_DFA2B3508530); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 102.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.45,
   "hfov": 23
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A81CF7E8_8EC8_5A8E_41DA_AC82D8DCE305",
   "yaw": 102.27,
   "pitch": -20.45,
   "hfov": 23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_91E77166_8EC7_F785_41B0_FF19ABEB6535",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_AF5E5638_8EC8_5D8E_41BB_FDE2D078AF94); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -171.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.18,
   "hfov": 18.88
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F08475_8E58_5D86_41D7_878385B6011B",
   "yaw": -171.53,
   "pitch": -26.18,
   "hfov": 18.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9668FDEE_830E_5863_41CC_CE29ECB4842E",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 28); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -26.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.71,
   "hfov": 19.85
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F04475_8E58_5D86_41D7_6AC532A25DFB",
   "yaw": -26.19,
   "pitch": -32.71,
   "hfov": 19.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99B1FE61_8376_3861_41D7_A4A9EA47A255",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_941056FE_84E7_F61D_41D0_E8887FE18F61, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_9902B118_88EA_74F4_41D3_E963423E8B4A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -88.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.57,
   "hfov": 6.04
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": -88.58,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.04
  }
 ],
 "id": "overlay_94B756C0_84E6_7666_4193_67167020E744",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B, this.camera_A901B2CD_8EC8_5A86_41C6_C95892639EB7); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -81.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27,
   "hfov": 17.01
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FD5475_8E58_5D86_41B1_F7434A0B4E07",
   "yaw": -81.27,
   "pitch": -27,
   "hfov": 17.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8DFAA3B8_830A_68EF_41CD_839851AB4F77",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D, this.camera_A927732B_8EC8_5B82_41CF_FD48072E8A74); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 149.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_2_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.5,
   "hfov": 17.64
  }
 ],
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FD0475_8E58_5D86_41C8_F3AAA716CE88",
   "yaw": 149.45,
   "pitch": -22.5,
   "hfov": 17.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9276FB31_830E_F9FE_41C9_7AAF98FB0A95",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_A916D2FC_8EC8_5A86_41C3_12A63A2A537B); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -177.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.55,
   "hfov": 26.19
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AE0EB4AB_8E48_DE82_41C5_949CF2833205",
   "yaw": -177.43,
   "pitch": -15.55,
   "hfov": 26.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94421384_831A_28A6_41A7_963184D23B9D",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8, this.camera_A935C35A_8EC8_5B82_41E0_AC3ADAFF8368); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 0.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.45,
   "hfov": 19.18
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FE4475_8E58_5D86_41C3_1744A619C711",
   "yaw": 0.93,
   "pitch": -12.45,
   "hfov": 19.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8D98C5D3_831E_68A1_41D0_056881AF7812",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_9424979F_84EE_761B_41A5_CA2074F40C71, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_99039118_88EA_74F4_41BA_0157E4DED1F4, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -33.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.43,
   "hfov": 3.54
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": -33.13,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_4_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.54
  }
 ],
 "id": "overlay_9479B2AB_84EE_EE3A_41D3_85C4A5D55FA3",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE, this.camera_A8C1608B_8EC8_5682_41D9_83254B1ED63F); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 3.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.93,
   "hfov": 17.96
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CE8495_8E58_5E86_41DC_411AC9063796",
   "yaw": 3.16,
   "pitch": -14.93,
   "hfov": 17.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_93BBAF0C_833A_39A6_4189_0D1FA345F6E2",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_A830D05C_8EC8_5586_41CC_B62A71934F27); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -170.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.61,
   "hfov": 16.45
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CE1495_8E58_5E86_41A7_3B1033A575F2",
   "yaw": -170.09,
   "pitch": -18.61,
   "hfov": 16.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_92700DDE_8336_58A3_41DD_59EEB07C8162",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_959A3FDA_8426_D665_41D4_57551BAB0C04, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_9901F128_88EA_74D3_4199_EC59552DC909, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 151.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.32,
   "hfov": 9.19
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 151.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_2_0.png",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 154
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.19
  }
 ],
 "id": "overlay_979D6A7F_8426_7E1A_41C4_07B1E79B53BA",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8, this.camera_AB7D9B0D_8EC8_4B86_41B7_6209BAB94135); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 8.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.81,
   "hfov": 20.03
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_90C4C68D_8E48_DA87_41C9_AFA9C8945ADF",
   "yaw": 8.81,
   "pitch": -17.81,
   "hfov": 20.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9250D689_8E48_5A8E_41E0_5F3F3FB28577",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_AB509A61_8EC9_B5BE_41BE_E63BCDD57EEE); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 88.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "hfov": 14.12
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CCE495_8E58_5E86_41DF_FE9C1BB45E40",
   "yaw": 88.45,
   "pitch": -26.59,
   "hfov": 14.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9877E7AD_8316_28E1_41DE_8CBF8C19A521",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_958305BA_84DE_6A25_41D2_D0594DD18ED0, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_99058118_88EA_74F4_41D5_0DA518A3C70A, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 53.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_1_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.4,
   "hfov": 5.2
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 53.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_1_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.2
  }
 ],
 "id": "overlay_957F1025_84DE_AA2F_41DF_9490224C82BE",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC, this.camera_AAB899F4_8EC9_B686_417F_53643ADA5F1E); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.91,
   "hfov": 19.38
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94C8C485_8E58_5E86_41D4_7A1FC45359F0",
   "yaw": 5.2,
   "pitch": -22.91,
   "hfov": 19.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_919B825F_842E_AE1B_41DA_80D8B62262AA",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148, this.camera_AB4F1A23_8EC9_B582_41A3_BBAA9A202FC0); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 32.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_1_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.55,
   "hfov": 14.07
  }
 ],
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94C87485_8E58_5E86_41DC_E5F44061C5B0",
   "yaw": 32.45,
   "pitch": -42.55,
   "hfov": 14.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_986DE224_88DE_74DC_416D_68498BA54455",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_A94EB212_8EC8_5582_41E0_604AE065989A); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -49.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.91,
   "hfov": 15.81
  }
 ],
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94C94485_8E58_5E86_41E1_C38DA0B3C22F",
   "yaw": -49.09,
   "pitch": -49.91,
   "hfov": 15.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9CF65A3F_8426_5E1A_41B7_DC68EA72A2EB",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -6.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.41,
   "hfov": 13.17
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CAE485_8E58_5E86_41CE_F988833E84F6",
   "yaw": -6.55,
   "pitch": -36.41,
   "hfov": 13.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_93294F11_85D9_D7E7_41A3_EF92AEEF3AED",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9, this.camera_AAB5D9B6_8EC9_B685_41B8_4B3D0B01F6FC); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -2.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.06,
   "hfov": 16.97
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CD4495_8E58_5E86_41CC_F6BCC47715AD",
   "yaw": -2.94,
   "pitch": -12.06,
   "hfov": 16.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9305EDE0_8339_D89E_41D6_C407A1CCC52C",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5, this.camera_AAA3B977_8EC9_B782_41CC_B6F242951FB5); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 177.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.55,
   "hfov": 8.13
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94CEF495_8E58_5E86_41E1_02D5DCD2FD41",
   "yaw": 177.88,
   "pitch": -15.55,
   "hfov": 8.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_903EE7F9_833E_686E_41D7_ADE5B0DC67DC",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4, this.camera_AF012761_8EC8_5BBE_41C9_83112DAD6464); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 94.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.45,
   "hfov": 19.71
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_95DF421D_8E58_5586_4198_A681D0E2050E",
   "yaw": 94.79,
   "pitch": -20.45,
   "hfov": 19.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94E8FA88_8E58_CA8E_41E1_7C03BFDF01E2",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_AF0FA79F_8EC8_5A82_41DC_DB55B890F6E8); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 14.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.41,
   "hfov": 27.57
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AEEAC799_8E49_DA8E_41D2_8D3B2888E3D5",
   "yaw": 14.21,
   "pitch": -15.41,
   "hfov": 27.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9574A477_8E59_FD82_41CC_8BDB6DA0C0D3",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D, this.camera_AF71F6F3_8EC8_5A82_41DF_DA9FE3FCB714); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -39.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.55,
   "hfov": 20.46
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AEE92799_8E49_DA8E_41BB_4C7C538875E1",
   "yaw": -39.27,
   "pitch": -33.55,
   "hfov": 20.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AEDCE13A_8E4B_D78D_41DC_1988F1BD3915",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D, this.camera_AF79C722_8EC8_5B82_41CF_5AE40484F0F5); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 63.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.27,
   "hfov": 21.2
  }
 ],
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AEE98799_8E49_DA8E_41C8_9DA16560288D",
   "yaw": 63.82,
   "pitch": -30.27,
   "hfov": 21.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9317F9A2_8E48_D6BD_4191_BE04D166CD97",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_AB809D5F_8EC8_4F82_41DE_3364BEC6E3D4); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -0.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.05,
   "hfov": 19.76
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F77485_8E58_5E86_41E1_0BA935BAC7EE",
   "yaw": -0.53,
   "pitch": -20.05,
   "hfov": 19.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9EB6FC17_8B2A_CCFC_41D6_41ACC88F31AB",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8, this.camera_A8D650AA_8EC8_5682_41D2_E3BF0A29B8DF); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 89.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.37,
   "hfov": 18.08
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94FC3475_8E58_5D86_41D4_E8978D3AACE8",
   "yaw": 89.6,
   "pitch": -13.37,
   "hfov": 18.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8C99CCD2_8319_D8A2_41D3_1763AFFE7AB6",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_991C0108_88EA_74D4_41D1_1672653AE3E2, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 13.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.92,
   "hfov": 14.36
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": 13.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_1_0.png",
      "width": 246,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.36
  }
 ],
 "id": "overlay_9496458D_84FA_6AFF_41D8_9885E62625AC",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_932C01FA_8E47_B68D_41DA_2333FA2A5357, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_94D1D4B4_8E58_5E86_41E1_37510D940F72, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -89.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.96,
   "hfov": 6.62
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": -89.83,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_2_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.62
  }
 ],
 "id": "overlay_946B96F6_8E78_7A82_41C4_8BFDBDA5B3ED",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41, this.camera_A96DB260_8EC8_55BE_41D0_B3C8D1DB3DB0); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 138.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.68,
   "hfov": 16.19
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F17475_8E58_5D86_41D0_BD3AED40F11B",
   "yaw": 138.16,
   "pitch": -39.68,
   "hfov": 16.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B0E735D_8376_69A1_41D9_E0E662CF6BD3",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270, this.camera_A95F1231_8EC8_559E_41D5_94E543593D43); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 1.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.27,
   "hfov": 19.61
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F13485_8E58_5E86_41D3_39404A003446",
   "yaw": 1.11,
   "pitch": -21.27,
   "hfov": 19.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99AFDE47_837A_3BA2_41BC_85A65313E4D6",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_A972E29E_8EC8_5A82_41DF_274EC16BD355); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -83.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.73,
   "hfov": 20.35
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F2F485_8E58_5E86_41DA_957DF2902592",
   "yaw": -83.16,
   "pitch": -14.73,
   "hfov": 20.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9AE32E7A_837A_5862_41E0_059B72F1A1C9",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301, this.camera_AEBAA55D_8EC8_5F86_41C7_A12B4678F4AD); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 175.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.95,
   "hfov": 11.89
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F27485_8E58_5E86_41D9_7E45A82FA254",
   "yaw": 175.37,
   "pitch": -13.95,
   "hfov": 11.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A35BAD66_830E_5862_41DD_724AF9B82C1A",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95950CC8_845B_DA65_41C0_F5E4D5943128, {'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','pressedBorderColor':'#000000','iconHeight':20,'paddingLeft':5,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverIconLineWidth':5,'rollOverIconWidth':20,'borderSize':0,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'iconColor':'#000000','pressedBackgroundOpacity':0.3,'paddingBottom':5,'pressedBorderSize':0,'iconWidth':20,'iconLineWidth':5,'rollOverBorderSize':0,'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'borderColor':'#000000'}, this.ImageResource_99007128_88EA_74D3_41DE_03A0F1D86789, null, null, null, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -85.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_1_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.91,
   "hfov": 5.74
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "yaw": -85.15,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_1_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74
  }
 ],
 "id": "overlay_976A95BF_845A_6A1B_4190_A69985CB027E",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_AF46D58C_8EC8_5E86_41D5_B1C12E26F40D); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -3.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.55,
   "hfov": 20.27
  }
 ],
 "data": {
  "label": "Arrow 05b"
 },
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_94F3E485_8E58_5E86_41D2_5CFDB2355891",
   "yaw": -3.8,
   "pitch": -15.55,
   "hfov": 20.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_986D155C_88E6_5F6C_41CB_729A4A8BF4B6",
 "rollOverDisplay": false,
 "enabledInCardboard": true
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FFB475_8E58_5D86_41E0_ED50E5DA88DF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FF6475_8E58_5D86_41D1_55BE87642096",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FF1475_8E58_5D86_41BB_7172851F0E8A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F48485_8E58_5E86_41D4_ADDCCF0EC6E1",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_2_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F5E485_8E58_5E86_41B2_9C1675CFCC94",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F7D485_8E58_5E86_41C0_49FB8C149A96",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CC2495_8E58_5E86_41D3_90E6DFC5D61D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CDD495_8E58_5E86_41C8_684B525D4498",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CD7495_8E58_5E86_41C9_C0CC4093AE98",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CE7495_8E58_5E86_41C3_582F9D0E6D18",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_91D3ABD4_8EB8_4A86_41E0_493E8CFCECEC",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CBE495_8E58_5E86_41C1_0A5CC8C4CD69",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CB8495_8E58_5E86_41DE_9999C37A481F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F60485_8E58_5E86_41C9_F4E7A4393091",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F79485_8E58_5E86_41E0_F2D1F77735FB",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F74485_8E58_5E86_41D5_13B1B573A9C7",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94C0C495_8E58_5E86_41DF_BBE2F8A07759",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F6E485_8E58_5E86_41CC_CE0A49625A06",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F67485_8E58_5E86_41DD_659D50AA006E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F62485_8E58_5E86_41D2_DF70A26BF23E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F57485_8E58_5E86_41AF_00E1D544D2BF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F53485_8E58_5E86_41D4_CAF83B99E073",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F38485_8E58_5E86_41CC_0E18289B0B57",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F33485_8E58_5E86_41C9_77E89655358A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F4F485_8E58_5E86_41BF_680D852FCC65",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0_HS_4_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_A81967E8_8EC8_5A8E_41DF_9F6B68E707F0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CA4495_8E58_5E86_41DF_3038621B5628",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CF7495_8E58_5E86_41D1_F89F0F8E453C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CF4495_8E58_5E86_41D5_10E7D7561992",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AD689A85_8EB8_4A86_41DC_477B610FC5FE",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94C80485_8E58_5E86_41DA_3F698607A234",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94C9B485_8E58_5E86_41D1_96221250EB44",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AE0E64AB_8E48_DE82_41DA_F7817F6F8D63",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_91E30BB5_8EB8_4A86_41DE_0E7D47320186",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FBA475_8E58_5D86_41CA_9225F44A9966",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FCC475_8E58_5D86_41C7_E0522D391C0F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F69485_8E58_5E86_41D0_E00910AF40B0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_A81CF7E8_8EC8_5A8E_41DA_AC82D8DCE305",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F08475_8E58_5D86_41D7_878385B6011B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F04475_8E58_5D86_41D7_6AC532A25DFB",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FD5475_8E58_5D86_41B1_F7434A0B4E07",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FD0475_8E58_5D86_41C8_F3AAA716CE88",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AE0EB4AB_8E48_DE82_41C5_949CF2833205",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FE4475_8E58_5D86_41C3_1744A619C711",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CE8495_8E58_5E86_41DC_411AC9063796",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CE1495_8E58_5E86_41A7_3B1033A575F2",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_90C4C68D_8E48_DA87_41C9_AFA9C8945ADF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CCE495_8E58_5E86_41DF_FE9C1BB45E40",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94C8C485_8E58_5E86_41D4_7A1FC45359F0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94C87485_8E58_5E86_41DC_E5F44061C5B0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94C94485_8E58_5E86_41E1_C38DA0B3C22F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CAE485_8E58_5E86_41CE_F988833E84F6",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CD4495_8E58_5E86_41CC_F6BCC47715AD",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94CEF495_8E58_5E86_41E1_02D5DCD2FD41",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_95DF421D_8E58_5586_4198_A681D0E2050E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AEEAC799_8E49_DA8E_41D2_8D3B2888E3D5",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AEE92799_8E49_DA8E_41BB_4C7C538875E1",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AEE98799_8E49_DA8E_41C8_9DA16560288D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F77485_8E58_5E86_41E1_0BA935BAC7EE",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94FC3475_8E58_5D86_41D4_E8978D3AACE8",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F17475_8E58_5D86_41D0_BD3AED40F11B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F13485_8E58_5E86_41D3_39404A003446",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F2F485_8E58_5E86_41DA_957DF2902592",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F27485_8E58_5E86_41D9_7E45A82FA254",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_94F3E485_8E58_5E86_41D2_5CFDB2355891",
 "colCount": 4
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "gap": 10,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "Player1011"
 },
 "overflow": "visible",
 "vrPolyfillScale": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
