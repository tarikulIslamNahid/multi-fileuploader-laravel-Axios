"use strict";

$('#addNewFile').on('click', function () {
  var newFile = "<tr>\n <td scope='row'>\n   <input class='form-control file_input' type='file' id='formFile'>\n </td>\n <td class='file_size'> File size </td>\n <td  class='file_Uploaded_mb'> File Upload mb </td>\n <td class='file_parcent'> File % </td>\n <td class='file_status'> File Status </td>\n <td>\n      <button class='btn btn-primary uploadBtn brn-sm'> <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-upload' viewBox='0 0 16 16'>\n         <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'/>\n         <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z'/>\n       </svg></button> \n      <button class='btn btn-danger cancelBtn brn-sm'> \n         <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x' viewBox='0 0 16 16'>\n             <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/>\n           </svg>\n         </button> \n </td>\n</tr>";
  $("#fileList").append(newFile); // calculate and add file size 

  $('.file_input').on('change', function () {
    var selectFile = $(this).prop('files');
    var fileSize = (selectFile[0].size / (1024 * 1024)).toFixed(2);
    $(this).closest('tr').find('.file_size').html(fileSize + " MB");
  });
  $('.uploadBtn').on('click', function (e) {
    var currentFile = $(this).closest('tr').find('.file_input').prop('files');
    var file_Uploaded_mb = $(this).closest('tr').find('.file_Uploaded_mb');
    var file_status = $(this).closest('tr').find('.file_status');
    var file_parcent = $(this).closest('tr').find('.file_parcent');
    var fData = new FormData();
    fData.append('fileKey', currentFile[0]);
    onUpload(fData, file_Uploaded_mb, file_parcent, file_status);
    e.preventDefault();
    e.stopImmediatePropagation();
  }); //cancel added row 

  $('.cancelBtn').on('click', function () {
    $(this).parents('tr').remove();
  });
});

function onUpload(fData, file_Uploaded_mb, file_parcent, file_status) {
  var url = '/uploadfile';
  var config = {
    headers: {
      'content-type': 'multipart/form-data'
    },
    onUploadProgress: function onUploadProgress(progressEvent) {
      var upMb = (progressEvent.loaded / (1024 * 1024)).toFixed(2);
      var upPer = (progressEvent.loaded * 100 / progressEvent.total).toFixed(2);
      file_Uploaded_mb.html(upMb);
      file_parcent.html(upPer);
    }
  };
  axios.post(url, fData, config).then(function (res) {
    if (res.status == 200) {
      file_status.html('Uploaded');
    } else {
      file_status.html('Failed');
    }
  })["catch"](function (err) {
    file_status.html('Failed');
  });
}