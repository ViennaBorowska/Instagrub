const searchHandler = async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const formData = new FormData();

    if (formData) {
      const response = await fetch("/api/recipes/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchInput: document.getElementById("searchInput").value,
        }),
      })
        .then((response) => response.json())
        .then((recipeCards) => {
          const template = `<section class="dashboard-holder" id="dashboard-holder">
                              <article class="recommended-options">
                                <h1>Hello {{ user.username }}</h1>
                              </article>
                            
                              {{#each recipeCards as |recipeCard| }}
                                <article class="recipe-card">
                                  <div class="recipe-card-header">
                                    <h3 class="recipe-card-author">
                                      <span class="chef-icon"><i class="fa-solid fa-utensils"></i></span>
                                      {{user.username}}<span class="recipe-card-id-span">{{ id }}</span>
                                    </h3>
                                    <div class="badge-icon-holder">

                                      {{#if recipe_spice}}
                                      <i class="fa-solid fa-pepper-hot"></i>
                                      {{/if}}

                                      {{#if recipe_veg}}
                                      <i class="fas fa-seedling"></i>
                                      {{/if}}

                                      {{#if recipe_fish}}
                                      <i class="fas fa-fish"></i>
                                      {{/if}}

                                      {{#if recipe_shellfish}}
                                      <i class="fas fa-shrimp"></i>
                                      {{/if}}
                                  
                                      

                                    </div>
                                  </div>
                                  <div class="recipe-card-img-holder">
                                    <a href="/recipe/{{id}}"><img
                                        class="recipe-card-img"
                                        src="../../{{recipe_image}}"
                                        alt="picture of pancakes"
                                      /></a>

                                  </div>

                                  <div class="recipe-card-tag-holder">
                                    <ul class="recipe-tag-list-holder">
                                        
                                          
                                            {{#each recipe_ingredients_tags}}
                                          <li class="recipe-tag-list-item">{{this}}</li>
                                        {{/each}}
                                            <li class="recipe-tag-list-item">{{ recipe_cuisine }}</li>
                                        </ul>
                                  </div>

                                  <div class="recipe-card-body">
                                    <div class="recipe-card-icon-holder">
                                      <span class="heart-icon-outline"><i class="fas fa-heart"></i><span class="recipe-icon-likes-text">{{recipe_likes}} likes</span></span>
                                      <span class="timer-icon"><i class="fa-solid fa-clock"></i><span
                                          class="timer-icon-text"
                                        >
                                          {{recipe_cooking_time_hours}}
                                          Hours
                                          {{recipe_cooking_time_minutes}}
                                          mins</span></span>
                                    </div>
                                    <h3 class="recipe-card-title"><a
                                        class="recipe-card-title-link"
                                        href="/recipe/{{id}}"
                                      >{{recipe_title}}</a></h3>
                                    <p class="recipe-card-bio">{{recipe_summary}} </p>

                                    <h3 class="recipe-card-comments"><button
                                        class="recipe-card-title-link trigger"
                                        href="/recipe/{{id}}"
                                      >{{comments.length}} Comments</button></h3>

                                  </div>

                                </article>

                                <div class="modal">
                                  <div class="modal-content">
                                    <div class="recipe-modal-holder">
                                <section class="single-recipe-comments-container">
                                  <div class="modal-header-container">
                                  <button class="close-button"> <span class="close-icon"><i class="fa-solid fa-circle-xmark"></i></span> </button>
                                      </div>
                                      <h2 class="single-recipe-subheader comment-subheader modal-subheader">Comments</h2>
                                {{#each comments as |comment|}}
                                <section class="comment-card-holder">
                                <article class="comment-card">
                                  <div class="comment-card-header">
                                    <div class="name-image-holder">
                                      <div class="user-profile-img-holder">
                                        <img
                                          class="user-profile-img"
                                          src="/uploads/{{user.user_image}}"
                                          alt=""
                                        />
                                      </div>
                                      <h2 class="comment-card-username">{{user.username}}</h2>
                                    </div>
                              
                                    <h2 class="comment-card-date"> {{createdAt}} </h2>
                                  </div>
                                  <p class="comment-card-body">"{{comment_desc}}"</p>
                                </article>
                              </section>
                                    {{/each}}
                                <div class="single-recipe-input-holder">
                                    <input class="single-recipe-comment-input single-input-list" id="single-recipe-comment-input" type="text" placeholder="Enter comment">
                                <button type="button" class="single-recipe-comment-button single-button-list" id="single-recipe-comment-button"><i class="fa-solid fa-comment"></i>comment</button>
                                </div>
                                  </section>
                                  </div>
                                </div>
                                </div>
                              {{/each}}                            
                            </section>
                            `;
          const renderRecipes = Handlebars.compile(template);
          document.getElementById("dashboard-holder").innerHTML = renderRecipes(
            { recipeCards: recipeCards }
          );
        });
    }
  }
};

document
  .querySelector("#searchInput")
  .addEventListener("keydown", searchHandler);
