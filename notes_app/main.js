window.onload = function()
{
    function loadPosts()
    {
        return fetch("/api/posts")
            .then( function(res){ 
                return res.json();
            })
            .then( function(resJson){ 
                
                var postsHTML = ''; 
                var postsDiv = document.getElementById("posts");

                for(var i=0;i<resJson.length;i++)
                {
                    postsHTML = postsHTML + `<li><div>${resJson[i].content}</div><div>author - ${resJson[i].author}</div></li>`;
                }

                postsDiv.innerHTML = postsHTML;
            })
    }

   loadPosts();

    var btn = document.getElementById("btn");

    btn.onclick = function()
    {
        var content = document.getElementById("content").value;
        var author = document.getElementById("author").value;

        var obj = {
            content: content,
            author: author
        };

        fetch("/api/post", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })
        .then(function(res){
            loadPosts();
        });
    }
}
