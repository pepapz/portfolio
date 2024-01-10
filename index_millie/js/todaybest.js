$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"야생의 위로" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".todaybestload").eq(0).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(0).text(msg.documents[0].title);
            $(".todaybest-author").eq(0).text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"나는 내 나이가 참 좋다" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".todaybestload").eq(1).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(1).text(msg.documents[0].title);
            $(".todaybest-author").eq(1).text(msg.documents[0].authors[0]);

        });


$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"유리 멘탈을 위한 심리책" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".todaybestload").eq(2).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(2).text(msg.documents[0].title);
            $(".todaybest-author").eq(2).text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"달러구트 꿈 백화점" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".todaybestload").eq(3).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(3).text(msg.documents[0].title);
            $(".todaybest-author").eq(3).text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"미라클 모닝" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".todaybestload").eq(4).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(4).text(msg.documents[0].title);
            $(".todaybest-author").eq(4).text(msg.documents[0].authors[0]);

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
  

            $(".todaybestload").eq(5).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(5).text(msg.documents[0].title);
            $(".todaybest-author").eq(5).text(msg.documents[0].authors[0]);

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
  

            $(".todaybestload").eq(6).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(6).text(msg.documents[0].title);
            $(".todaybest-author").eq(6).text(msg.documents[0].authors[0]);

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"요리코를 위해" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".todaybestload").eq(7).attr("src", msg.documents[0].thumbnail);


            $(".todaybest-title").eq(7).text(msg.documents[0].title);
            $(".todaybest-author").eq(7).text(msg.documents[0].authors[0]);

        });

