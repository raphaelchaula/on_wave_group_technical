$(document).ready(function() {
    $.ajax({
        url: 'http://numbersapi.com/5/4/date?json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#numbers-api-info').text(data.text);
        },
        error: function() {
            $('#numbers-api-info').text('Failed to load information from Numbers API.');
        }
    });

    const dropArea = document.getElementById('image-upload-area');
    const fileInput = document.getElementById('image-input');
    const initialDropAreaContent = dropArea.innerHTML; // Store initial content

    dropArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        handleFile(fileInput.files[0]);
    });

    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropArea.classList.add('dragover');
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragover');
    });

    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dropArea.classList.remove('dragover');
        handleFile(event.dataTransfer.files[0]);
    });

    function handleFile(file) {
        if (file && file.type.startsWith('image/')) {
            const formData = new FormData();
            formData.append('image', file);

            // Update drop area with upload progress
            dropArea.innerHTML = `<div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                                  </div>`;

            $.ajax({
                url: 'http://localhost:4000/upload_image',
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                xhr: function() {
                    const xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", function(evt) {
                        if (evt.lengthComputable) {
                            const percentComplete = evt.loaded / evt.total;
                            const percentVal = parseInt(percentComplete * 100);
                            $('.progress-bar').width(percentVal + '%').attr('aria-valuenow', percentVal).text(percentVal + '%');
                        }
                    }, false);
                    return xhr;
                },
                success: function(response) {
                    console.log('Upload successful:', response);
                    setTimeout(() => {
                        dropArea.innerHTML = initialDropAreaContent;
                    }, 3000);
                },
                error: function(error) {
                    console.error('Upload error:', error);
                    dropArea.textContent = 'Upload failed. Please try again.';
                     setTimeout(() => {
                        dropArea.innerHTML = initialDropAreaContent;
                    }, 3000);
                }
            });
        } else {
            dropArea.textContent = 'Invalid file type. Please upload an image.';
             setTimeout(() => {
                        dropArea.innerHTML = initialDropAreaContent;
                    }, 3000);
        }
    }
});