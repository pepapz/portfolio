      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"정여울" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[1].title );
            console.log( msg.documents[1].thumbnail );
  



   

            
            
            for(var i=0; i<=$('.writer-slide > li:last').index(); i++){
 
                  
                  $(".jung-img").eq(i).attr("src", msg.documents[i].thumbnail);
                  $(".jung-title").eq(i).text(msg.documents[i].title);
                  $(".jung-author").eq(i).text(msg.documents[i].authors);
                
            }





        });

