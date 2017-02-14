$(document).ready(function(){
    
    $('#search').on('click', function(){
        var searchTerm = $('#searchField').val();
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchTerm +'&format=json&callback=?';
        console.log('click & ' + url);
        $.getJSON(url, function(data){
            console.log(data);
            $('#searchTitle').html(data[0] + ' - Wikipedia Viewer');
            var data1 = '';
            var data2 = '';
            var data3 = '';
            for(var i = 1; i < data[1].length; i++){
            data1 += '<a href="' + data[3][i] + '"><div class="result"><h2>' + data[1][i] + "</h2><br><p>" + data[2][i] + '</p></div></a><br>';
            }
            $('#output').html(data1);
        });
    }); 
});

