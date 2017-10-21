'use strict';
/*отрабатываем попап заявки*/
var callbackBtn = document.getElementsByClassName('page-header__callback-btn');

var popupCallback = document.getElementsByClassName('popup-callback');
var popupOverlay = document.getElementsByClassName('popup-overlay');
var popupCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

$(callbackBtn).click(function() {
  $(popupCallback).addClass('popup-callback--active');
  $(popupOverlay).addClass('popup-overlay--active');
});

$(popupCloseBtn).click(function() {
  $(popupCallback).removeClass('popup-callback--active');
  $(popupOverlay).removeClass('popup-overlay--active');
});
/* */
/* отрабатываем открытие попап окна с ссылки в футере */
var footerCallbackLink = document.getElementsByClassName('page-footer__callback-link');

$(footerCallbackLink).click(function(ev) {
  ev.preventDefault();
  $(popupCallback).addClass('popup-callback--active');
  $(popupOverlay).addClass('popup-overlay--active');
});
/*общие переменные и оперяции для всех stage*/
var progress = document.getElementsByClassName('progress');
var progressBar = document.getElementsByClassName('progress__bar');
var progressPercent = document.getElementById('progress-percent');

var stage1 = document.getElementsByClassName('stage-1');
var stage2 = document.getElementsByClassName('stage-2');
var stage3 = document.getElementsByClassName('stage-3');
var stage4 = document.getElementsByClassName('stage-4');
var stage5 = document.getElementsByClassName('stage-5');
/*stage 1*/
var toStage2Btn = document.getElementsByClassName('stage-1__to-stage-2-btn');

var cubaturaInput = document.getElementById('cubatura');
var cubatura = '';

var objectWidthInput = document.getElementById('width');
var objectHeightInput = document.getElementById('height');
var objectDepthInput = document.getElementById('depth');

var objectWidth = '';
var objectHeight = '';
var objectDepth = '';

$(toStage2Btn).click(function(ev) {
  ev.preventDefault();
  if (($(cubaturaInput).val() != '') || ($(objectWidthInput).val() != '' && $(objectHeightInput).val() != '' && $(objectDepthInput).val() != '')) {
    $(stage1).fadeOut(500);
    setTimeout(function() {
      $(progress).removeClass('disable');
      $(stage2).fadeIn(500);
      setTimeout(function() {
        progressPercent.textContent = '25%';
        $(progressBar).animate({width: "25%"}, 100);
      }, 500);
    }, 500);
    if ($(objectWidthInput).val() != '' && $(objectHeightInput).val() != '' && $(objectDepthInput).val() != '') {
      objectWidth = $(objectWidthInput).val();
      objectHeight = $(objectHeightInput).val();
      objectDepth = $(objectDepthInput).val();
    }
    if ($(cubaturaInput).val() != '') {
      cubatura = $(cubaturaInput).val();
    }
    console.log('Кубатура: ' + cubatura);
    console.log('Длина: ' + objectWidth);
    console.log('Высота: ' + objectHeight);
    console.log('Ширина: ' + objectDepth);
  }
});
/* */
/*stage 2*/
var toStage3Btn = document.getElementsByClassName('stage-2__to-stage-3-btn');
var backToStage1Link = document.getElementsByClassName('stage-2__back-link');

var choosedDeliver = 'Самовывоз';

var radioDeliverChoose = document.getElementsByClassName('stage-2__input');

var deliverTextAreaField = document.getElementsByClassName('stage-2__deliver-textarea-field');
var deliverTextarea = document.getElementById('deliver-textarea');
var deliverText = '';

$(radioDeliverChoose).click(function() {
  choosedDeliver = $(this).val();
  console.log(choosedDeliver);
  if ($(this).val() == 'Самовывоз') {
    $(deliverTextAreaField).addClass('disable');
  } else if ($(this).val() == 'Доставка') {
    $(deliverTextAreaField).removeClass('disable');
  }
});

$(backToStage1Link).click(function(ev) {
  ev.preventDefault();
  $(stage2).fadeOut(500);
  setTimeout(function() {
    $(progress).addClass('disable');
    $(stage1).fadeIn(500);
    setTimeout(function() {
      progressPercent.textContent = '0%';
      $(progressBar).animate({width: "0%"}, 100);
    }, 500);
  }, 500);
});

$(toStage3Btn).click(function(ev) {
  ev.preventDefault();
  if (choosedDeliver == 'Доставка' && $(deliverTextarea).val() != '') {
    deliverText = $(deliverTextarea).val();
    console.log(deliverText);
    $(stage2).fadeOut(500);
    setTimeout(function() {
      $(stage3).fadeIn(500);
      setTimeout(function() {
        progressPercent.textContent = '50%';
        $(progressBar).animate({width: "50%"}, 100);
      }, 500);
    }, 500);
  } else if (choosedDeliver == 'Самовывоз') {
    deliverText = '';
    $(stage2).fadeOut(500);
    setTimeout(function() {
      $(stage3).fadeIn(500);
      setTimeout(function() {
        progressPercent.textContent = '50%';
        $(progressBar).animate({width: "50%"}, 100);
      }, 500);
    }, 500);
  }
});
/* */
/*stage 3*/
var toStage4Btn = document.getElementsByClassName('stage-3__to-stage-4-btn');
var backToStage2Link = document.getElementsByClassName('stage-3__back-link');

var instrument = document.getElementById('checkbox-instrument');
var instrumentNeed = '';

var glue = document.getElementById('checkbox-glue');
var glueNeed = '';

$(instrument).click(function() {
  instrumentNeed = '';
});

$(glue).click(function() {
  glueNeed = '';
});

$(backToStage2Link).click(function(ev) {
  ev.preventDefault();
  $(stage3).fadeOut(500);
  setTimeout(function() {
    $(stage2).fadeIn(500);
    setTimeout(function() {
      progressPercent.textContent = '25%';
      $(progressBar).animate({width: "25%"}, 100);
    }, 500);
  }, 500);
});

$(toStage4Btn).click(function(ev) {
  ev.preventDefault();
  $(stage3).fadeOut(500);
  setTimeout(function() {
    if ($(instrument).prop('checked')) {
      instrumentNeed = 'Нужен инструмент!';
    }
    if ($(glue).prop('checked')) {
      glueNeed = 'Нужен клей!';
    }
    console.log('Инструмент: ' + instrumentNeed);
    console.log('Клей: ' + glueNeed);
    $(stage4).fadeIn(500);
    setTimeout(function() {

      progressPercent.textContent = '75%';
      $(progressBar).animate({width: "75%"}, 100);
    }, 500);
  }, 500);
});
/* */
/*stage 4*/
var toStage5Btn = document.getElementsByClassName('stage-4__to-stage-5-btn');
var backToStage3Link = document.getElementsByClassName('stage-4__back-link');

var lastStagePhone = document.getElementById('last-stage-phone');

var lastStageCubatura = document.getElementById('last-stage-cubatura');
var lastStageObjectWidth = document.getElementById('last-stage-objectWidth');
var lastStageObjectHeight = document.getElementById('last-stage-objectHeight');
var lastStageObjectDepth = document.getElementById('last-stage-objectDepth');

var lastStageChooseDeliver = document.getElementById('last-stage-chooseDeliver');
var lastStageDeliverText = document.getElementById('last-stage-deliverText');

var lastStageInstrumentNeed = document.getElementById('last-stage-instrumentNeed');
var lastStageGlueNeed = document.getElementById('last-stage-glueNeed');

$(backToStage3Link).click(function(ev) {
  ev.preventDefault();
  
  $(stage4).fadeOut(500);
  setTimeout(function() {
    $(stage3).fadeIn(500);
    setTimeout(function() {
      progressPercent.textContent = '50%';
      $(progressBar).animate({width: "50%"}, 100);
    }, 500);
  }, 500);
});

var frmLast = $('#last-form');

frmLast.submit(function (ev) {

  $(lastStageCubatura).val(cubatura);
  $(lastStageObjectWidth).val(objectWidth);
  $(lastStageObjectHeight).val(objectHeight);
  $(lastStageObjectDepth).val(objectDepth);
  $(lastStageChooseDeliver).val(choosedDeliver);
  $(lastStageDeliverText).val(deliverText);
  $(lastStageInstrumentNeed).val(instrumentNeed);
  $(lastStageGlueNeed).val(glueNeed);

  $.ajax({
      type: frmLast.attr('method'),
      url: frmLast.attr('action'),
      data: frmLast.serialize(),
      success: function (data) {
            console.log('Форма успешно отправлена!');
            $(stage4).fadeOut(500);
            setTimeout(function() {
              $(stage5).fadeIn(500);
              setTimeout(function() {
                progressPercent.textContent = '100%';
                $(progressBar).animate({width: "100%"}, 100);
              }, 500);
            }, 500);
      }
  });
  ev.preventDefault();
});

/*отправка lite-form*/
var popupNameInput = document.getElementById('popup-name-input');
var popupPhoneInput = document.getElementById('popup-phone-input');

var liteForm = $('#lite-form');

liteForm.submit(function (ev) {
  $.ajax({
      type: liteForm.attr('method'),
      url: liteForm.attr('action'),
      data: liteForm.serialize(),
      success: function (data) {
          alert('Заявка отправлена!');
          $(popupNameInput).val('');
          $(popupPhoneInput).val('');
          $(popupCallback).removeClass('popup-callback--active');
          $(popupOverlay).removeClass('popup-overlay--active');
      }
  });
  ev.preventDefault();
});
/* */
/*Валидация форм*/
$(document).ready(function(){
  $(popupPhoneInput).inputmask("+9 (999) 999-9999"); //specifying options
});
$(document).ready(function(){
  $(lastStagePhone).inputmask("+9 (999) 999-9999"); //specifying options
});