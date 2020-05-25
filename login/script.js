$(function() {
  const $form = $('#login-form');
  const $message = $('#message');

  $form.submit(function(e) {
    e.preventDefault();

    $message.html('');

    const data = $form.serializeArray().reduce((o, x) => {
      o[x.name] = x.value;
      return o;
    }, {});
    
    $.ajax({
      url: 'https://comp426fa19.cs.unc.edu/sessions/login',
      type: 'POST',
      data,
      xhrFields: {
          withCredentials: true,
      },
    }).then(() => {
      $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
      /*
      $.ajax({
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        type: 'GET',
        data,
        xhrFields: {withCredentials: true,
        },
      }).then((response) => {
        tweets = response;
        let i = 0;
        for (i; i < response.length; i++) {
          console.log(response[i]);
          let tweetbody = response[i].body;
          let author = response[i].author;
          let likes = response[i].likeCount;
          let retweets = response[i].retweetCount;
          let replies = response[i].replyCount;
          let heart = response[i].isLiked ? `<div class="card-footer-item"><button class="button is-primary is-rounded heartButton" id="heart${i}" data="${i}"><i class="fa fa-heart" aria-hidden="true"></i>   ${likes}
          </button>  </div>`: `<div class="card-footer-item"><button class="button is-primary is-rounded heartButton" id="heart${i}" data="${i}"><i class="fa fa-heart-o" aria-hidden="true"></i>   ${likes}
          </button>  </div>`;
          let date = new Date(response[i].createdAt);
          let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
        
          let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();

          let dateStr = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear() + ' ' + date.getHours() + ':' + minutes;
          
          $('#homepage').append(`      <br>              <div class="card" id="tweet${i}">
          <header class="card-header">
          
              <br>
            <p class="card-header-title">
              ${author}
            </p>
            <br>
            
            <p class="subtitle is-6"><br>${dateStr} &nbsp;&nbsp;&nbsp;&nbsp;</p>


          </header>
          <div class="card-content">
            <div class="content">
            ${tweetbody}
              <br>
            </div>
          </div>
          <footer class="card-footer">
            ${heart}
            <div class="card-footer-item"><button class="button is-primary is-rounded retweetButton" data="${i}"><i class="fa fa-retweet" aria-hidden="true"></i>  ${retweets}
            </button>  
            </button></div>

            <div class="card-footer-item"><button class="button is-primary is-rounded replyButton" data="${i}"><i class="fa fa-reply" aria-hidden="true"></i>   ${replies}
            </button></div>

          </footer>
          <br>
        </div>
  `);
        }
       
      }).catch((error) => {
      });
      */
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
    });
  });


/*
export const retweetButtonPress = function(event) {
  event.preventDefault(); 

};
export const replyButtonPress = function(event) {
  event.preventDefault(); 

};
*/

});

