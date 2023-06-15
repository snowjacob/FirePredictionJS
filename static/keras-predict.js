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

var model = "";
(async function () {
    model = await tf.loadLayersModel('http://localhost:32/converted_model/model.json', false);
    $(".progress-bar").hide();
})();

$("#predict-button").click(async function () {
    let image = $('#selected-image').get(0);
    let tensor = tf.fromPixels(image)
        .resizeNearestNeighbor([350, 350])
        .toFloat()
        .expandDims();
    let prediction = await model.predict(tensor).array();
    $("#prediction-list").empty();
    $("#prediction-list").append('Wildfire Likelihood: ' + prediction[0].toFixed(4));
});
