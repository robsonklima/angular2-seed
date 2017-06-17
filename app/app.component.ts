import { Component } from 'angular2/core';
import { CoursesComponent } from "./courses.component";
import { AuthorsComponent } from "./authors.component";
import { PropertyBindingComponent } from "./property-binding.component";
import { ClassBindingComponent } from "./class-binding.component";
import { StyleBindingComponent } from "./style-binding.component";
import { EventBindingComponent } from "./event-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding.component";
import { TwoWayBindingStarComponent } from "./two-way-binding-star.component";
import { FavoriteComponent } from "./favorite.component";
import { LikeComponent } from "./like.component";
import { VoterComponent } from "./voter.component";
import { NgforComponent } from "./ngfor.component";
import { NgswitchComponent } from "./ngswitch.component";
import { PipeComponent } from "./pipe.component";
import { CustomPipeComponent } from "./custom-pipe.component";
import { ElvisComponent } from "./elvis.component";
import { NgcontentComponent } from "./ngcontent.component";
import { ZippyComponent } from "./zippy.component";
import { ContactFormComponent } from "./contact-form.component";
import { SubscribeFormComponent } from "./subscribe-form.component";
import { SignUpFormComponent } from "./signup-form.component";

@Component({
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
    template: `
        <signup-form></signup-form>
    `, 
    directives: [
        CoursesComponent, 
        AuthorsComponent, 
        PropertyBindingComponent,
        ClassBindingComponent,
        StyleBindingComponent,
        EventBindingComponent,
        TwoWayBindingComponent,
        TwoWayBindingStarComponent,
        FavoriteComponent,
        LikeComponent,
        VoterComponent,
        NgforComponent,
        NgswitchComponent,
        PipeComponent,
        CustomPipeComponent,
        ElvisComponent,
        NgcontentComponent,
        ZippyComponent,
        ContactFormComponent,
        SubscribeFormComponent,
        SignUpFormComponent
    ]
})

export class AppComponent { 
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    onLikeChange($event) {
        console.log($event);
    }

    // post = {
    //     voteCount: 10,
    //     myVote: 0        
    // }

    onVote($event) {
        console.log($event);
    }
}