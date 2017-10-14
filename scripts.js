$("#formulario").on('submit', function (e) {
 e.preventDefault();
 e.stopPropagation();


$(function (){
    
    var $trackers = $('#trackers');
    var email = $('#email').val();
    var session = $('#session').val();
    
    
    
    $.ajax({
        type: 'GET',
        url: 'https://api.georanker.com/v1/report/list.json?email='+email+'&session='+session,
        success: function(trackers){
            console.log('success', trackers);
            $.each(trackers.items, function(i, tracker) {
                $trackers.append('<tr> <td> '+tracker.id  +'</td> <td> '+ tracker.token +'</td> </tr>');
                
            })
        }
        
    });
    
    
});
    });