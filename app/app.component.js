System.register(['angular2/core', "./courses.component", "./authors.component", "./property-binding.component", "./class-binding.component", "./style-binding.component", "./event-binding.component", "./two-way-binding.component", "./two-way-binding-star.component", "./favorite.component", "./like.component", "./voter.component", "./ngfor.component", "./ngswitch.component", "./pipe.component", "./custom-pipe.component", "./elvis.component", "./ngcontent.component", "./zippy.component", "./contact-form.component", "./subscribe-form.component", "./signup-form.component", "./change-password-form.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, property_binding_component_1, class_binding_component_1, style_binding_component_1, event_binding_component_1, two_way_binding_component_1, two_way_binding_star_component_1, favorite_component_1, like_component_1, voter_component_1, ngfor_component_1, ngswitch_component_1, pipe_component_1, custom_pipe_component_1, elvis_component_1, ngcontent_component_1, zippy_component_1, contact_form_component_1, subscribe_form_component_1, signup_form_component_1, change_password_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            },
            function (class_binding_component_1_1) {
                class_binding_component_1 = class_binding_component_1_1;
            },
            function (style_binding_component_1_1) {
                style_binding_component_1 = style_binding_component_1_1;
            },
            function (event_binding_component_1_1) {
                event_binding_component_1 = event_binding_component_1_1;
            },
            function (two_way_binding_component_1_1) {
                two_way_binding_component_1 = two_way_binding_component_1_1;
            },
            function (two_way_binding_star_component_1_1) {
                two_way_binding_star_component_1 = two_way_binding_star_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (ngfor_component_1_1) {
                ngfor_component_1 = ngfor_component_1_1;
            },
            function (ngswitch_component_1_1) {
                ngswitch_component_1 = ngswitch_component_1_1;
            },
            function (pipe_component_1_1) {
                pipe_component_1 = pipe_component_1_1;
            },
            function (custom_pipe_component_1_1) {
                custom_pipe_component_1 = custom_pipe_component_1_1;
            },
            function (elvis_component_1_1) {
                elvis_component_1 = elvis_component_1_1;
            },
            function (ngcontent_component_1_1) {
                ngcontent_component_1 = ngcontent_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscribe_form_component_1_1) {
                subscribe_form_component_1 = subscribe_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (change_password_form_component_1_1) {
                change_password_form_component_1 = change_password_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.tweet = {
                        totalLikes: 10,
                        iLike: false
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLikeChange = function ($event) {
                    console.log($event);
                };
                // post = {
                //     voteCount: 10,
                //     myVote: 0        
                // }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // template: `
                        //     <h1>Hello Angular</h1>
                        //     <courses></courses>
                        //     <authors></authors>
                        //     <property-binding></property-binding>
                        //     <class-binding></class-binding>
                        //     <style-binding></style-binding>
                        //     <event-binding></event-binding>
                        //     <two-way-binding></two-way-binding>
                        //     <two-way-binding-star></two-way-binding-star> 
                        //     <favorite [isFavorite]="post.isFavorite" 
                        //          (change)="onFavoriteChange($event)"></favorite>
                        //     <like [totalLikes]="tweet.totalLikes" 
                        //          (change)="onLikeChange($event)"
                        //          [iLike]="tweet.iLike"></like>
                        //     <voter 
                        //     [voteCount]="post.voteCount"
                        //          [myVote]="post.myVote"
                        //          (vote)="onVote($event)">
                        //          </voter>
                        //     <ngfor></ngfor>
                        //     <ngswitch></ngswitch>
                        //     <pipe></pipe>
                        //     <custom-pipe></custom-pipe>
                        //     <elvis></elvis>
                        //     <bs-panel>
                        //         <div class="heading">The Heading</div>
                        //         <div class="body">This is the body</div>
                        //         <div class="body">This is the another body</div>
                        //     </bs-panel>
                        //     <zippy title="Who can see my stuff?">
                        //         Content of who can see my stuff
                        //     </zippy>
                        //     <zippy title="Who can contact me?">
                        //         Content of who can contact me
                        //     </zippy>
                        //     <contact-form></contact-form>
                        //     <subscribe-form></subscribe-form>
                        //     <signup-form></signup-form>
                        template: "\n        <change-password-form></change-password-form>\n    ",
                        directives: [
                            courses_component_1.CoursesComponent,
                            authors_component_1.AuthorsComponent,
                            property_binding_component_1.PropertyBindingComponent,
                            class_binding_component_1.ClassBindingComponent,
                            style_binding_component_1.StyleBindingComponent,
                            event_binding_component_1.EventBindingComponent,
                            two_way_binding_component_1.TwoWayBindingComponent,
                            two_way_binding_star_component_1.TwoWayBindingStarComponent,
                            favorite_component_1.FavoriteComponent,
                            like_component_1.LikeComponent,
                            voter_component_1.VoterComponent,
                            ngfor_component_1.NgforComponent,
                            ngswitch_component_1.NgswitchComponent,
                            pipe_component_1.PipeComponent,
                            custom_pipe_component_1.CustomPipeComponent,
                            elvis_component_1.ElvisComponent,
                            ngcontent_component_1.NgcontentComponent,
                            zippy_component_1.ZippyComponent,
                            contact_form_component_1.ContactFormComponent,
                            subscribe_form_component_1.SubscribeFormComponent,
                            signup_form_component_1.SignUpFormComponent,
                            change_password_form_component_1.ChangePasswordFormComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map