$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"이기적 유전자" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].authors );
            
  


            $(".book-name").text(msg.documents[0].title);
            $(".author").text(msg.documents[0].authors[0]);
            $(".publisher").text(msg.documents[0].publisher[0]);

        });