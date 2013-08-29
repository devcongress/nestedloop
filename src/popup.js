    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("http://news.devcongress.com/feeds/posts/default");
      feed.setNumEntries(10);
      var count = 1;
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("inner");
          var html = "";
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            html = "<h5>" + count++ + ". <a href='" + entry.link + "'>" + entry.title + "</a></h5>";
            var div = document.createElement("div");
            div.innerHTML = html;
            container.appendChild(div);            
          }
          document.write(html);
        }
      });
    }
    google.setOnLoadCallback(initialize);

