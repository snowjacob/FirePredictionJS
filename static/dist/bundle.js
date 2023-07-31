(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

$("#image-selector").change(function () {
    let reader = new FileReader();
    reader.onload = function () {
        let dataURL = reader.result;
        $("#selected-image").attr("src", dataURL);
        $("#prediction-list").empty();
    }
    let file = $("#image-selector").prop('files')[0];
    reader.readAsDataURL(file);
});

let model;
(async function () {
    model = await tf.loadLayersModel('./converted_model/model.json');
    $(".progress-bar").hide();
})();

$("#predict-button").click(async function () {
    let image = $('#selected-image').get(0);
    let tensor = tf.browser.fromPixels(image)
        .resizeNearestNeighbor([350, 350])
        .toFloat()
        .expandDims();
    let prediction = await model.predict(tensor).array();
    $("#prediction-list").empty();
    $("#prediction-list").append('Wildfire Likelihood: ' + (Number(prediction[0]).toFixed(4)) * 100 + '%');
});

},{}]},{},[1]);
