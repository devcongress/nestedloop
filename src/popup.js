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
                
                // title, author, and a little description for each title. useful?
                var article       = document.createElement("div"),
                    title         = document.createElement("h5"),
                    preparedTitle = document.createElement("a"),
                    summary       = document.createElement("p");
               
                preparedTitle.innerHTML = count++ + ". " + entry.title + " - by " + entry.author.split(" ")[0];
                preparedTitle.href = entry.link;
                
                console.log( preparedTitle );

                title.appendChild( preparedTitle );

                summary.innerHTML = entry.contentSnippet;
                article.appendChild( title );
                article.appendChild( summary );
                
                console.log( article );

                title.appendChild( preparedTitle );

                container.appendChild( article );
            }

            document.write(html);
        } else {
            // a pleasant message when we have failed to fetch feeds :(
        }
      });

    }

    google.setOnLoadCallback(initialize);

