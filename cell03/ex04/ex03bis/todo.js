
$(document).ready(function () {
    load_list();
    $('#new').click(function () {
        var new_task = prompt('Please enter your task:');

        if (new_task !== null && new_task.trim() !== '') {
            var li = $('<li>' + new_task + ' <button class="remove-btn">X</button></li>');
            $('#list').prepend(li);
            save_list();
        }
    });

    $(document).on('click', '.remove-btn', function () {
        $(this).parent().remove();
        save_list();
    });

    function save_list() {
        var list_html = $('#list').html();
        setCookie('list', list_html, 7);
    }

    function load_list() {
        var saved_list = getCookie('list');
        if (saved_list) {
            $('#list').html(saved_list);
        }
    }

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }

    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});