$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"마흔에 관하여" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".writer-imgload").attr("src", msg.documents[0].thumbnail);


            $(".writer-title").text(msg.documents[0].title);
            $(".writer-author").text(msg.documents[0].authors[0]);

        });