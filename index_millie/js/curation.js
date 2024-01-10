$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"한없이 사악하고 더없이 관대한" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(0).attr("src", msg.documents[0].thumbnail);
            


        });


$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"살며 사랑하며 기르며" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(1).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"두개의 나" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(2).attr("src", msg.documents[0].thumbnail);
          


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"IT 좀 아는 사람" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(3).attr("src", msg.documents[0].thumbnail);
            

        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"브랜드가 되어 간다는 것" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(4).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"완벽하게 사랑하는 너에게" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(5).attr("src", msg.documents[0].thumbnail);
            


        });


$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"좋은 사람에게만 좋은 사람이면 돼" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(6).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"매일 갑니다, 편의점" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(7).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"난생 처음 기타" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(8).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"메트로폴리스" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(9).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"여전히 휘둘리는 당신에게" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(10).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"남극점에서 본 우주" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(11).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"웨어하우스" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(12).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"그래스호퍼" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(13).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"어둠의 왼손" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(14).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"양자역학" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(15).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"브레이브 하트" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(16).attr("src", msg.documents[0].thumbnail);
            


        });

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"반 고흐" },
        headers:{Authorization: "KakaoAK 34b3a628996384dce31d3cc577106ba4"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );
  

            $(".curation-imgload").eq(17).attr("src", msg.documents[0].thumbnail);
            


        });