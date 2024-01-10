$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"유리멘탈을 위한 심리책" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best1-img").attr("src", msg.documents[0].thumbnail);


            $(".best1-title").text(msg.documents[0].title);
            $(".best1-author").text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"멘탈의 연금술" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best2-img").attr("src", msg.documents[0].thumbnail);


            $(".best2-title").text(msg.documents[0].title);
            $(".best2-author").text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"디 앤서" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best3-img").attr("src", msg.documents[0].thumbnail);


            $(".best3-title").text(msg.documents[0].title);
            $(".best3-author").text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"일을 잘한다는 것" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best4-img").attr("src", msg.documents[0].thumbnail);


            $(".best4-title").text(msg.documents[0].title);
            $(".best4-author").text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"추리소설가의 살인사건" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best5-img").attr("src", msg.documents[0].thumbnail);


            $(".best5-title").text(msg.documents[0].title);
            $(".best5-author").text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"어떤 죽음이 삶에게 말했다" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best6-img").attr("src", msg.documents[0].thumbnail);


            $(".best6-title").text(msg.documents[0].title);
            $(".best6-author").text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"떨림과 울림" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best7-img").attr("src", msg.documents[0].thumbnail);


            $(".best7-title").text(msg.documents[0].title);
            $(".best7-author").text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"한 번이라도 모든 걸 걸어본 적 있는가" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".best8-img").attr("src", msg.documents[0].thumbnail);


            $(".best8-title").text(msg.documents[0].title);
            $(".best8-author").text(msg.documents[0].authors[0]);

        });