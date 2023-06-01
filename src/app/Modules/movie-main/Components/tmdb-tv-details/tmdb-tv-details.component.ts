import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbMovieSevService } from '../../Services/tmdb-movie-sev.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-tmdb-tv-details',
  templateUrl: './tmdb-tv-details.component.html',
  styleUrls: ['./tmdb-tv-details.component.css']
})
export class TmdbTvDetailsComponent implements OnInit {

    loader:Boolean = false;
    imgPoster :String = "https://image.tmdb.org/t/p/original"
    tvseriesDetails :any 
  
//   ={
//     "adult": false,
//     "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
//     "created_by": [],
//     "episode_run_time": [
//         24
//     ],
//     "first_air_date": "2019-04-06",
//     "genres": [
//         {
//             "id": 16,
//             "name": "Animation"
//         },
//         {
//             "id": 10759,
//             "name": "Action & Adventure"
//         },
//         {
//             "id": 10765,
//             "name": "Sci-Fi & Fantasy"
//         }
//     ],
//     "homepage": "https://kimetsu.com/anime",
//     "id": 85937,
//     "in_production": true,
//     "languages": [
//         "ja"
//     ],
//     "last_air_date": "2023-04-09",
//     "last_episode_to_air": {
//         "id": 4267803,
//         "name": "Someone's Dream",
//         "overview": "During the mission with Uzui in the Entertainment District, Tanjiro and his comrades come out victorious in the fierce battle to the death against Upper Six Demons, Daki and Gyutaro. The death of the Upper Rank Demons that Tanjiro and his comrades succeeded in results in a shift in a situation that has remained unchanged for a hundred years, and brings about a disturbance between Muzan Kibutsuji and the demons...",
//         "vote_average": 9.0,
//         "vote_count": 2,
//         "air_date": "2023-04-09",
//         "episode_number": 1,
//         "production_code": "",
//         "runtime": 50,
//         "season_number": 4,
//         "show_id": 85937,
//         "still_path": "/cqDCLZ050JmmumJyTA9FbuQe6a3.jpg"
//     },
//     "name": "Demon Slayer: Kimetsu no Yaiba",
//     "next_episode_to_air": {
//         "id": 4354753,
//         "name": "Yoriichi Type Zero",
//         "overview": "After learning that he made Haganezuka angry for chipping his sword, Tanjiro and Nezuko head to the village where the swordsmiths live. At the Swordsmith Village, one of the securely hidden and most important bases for the members of the Demon Slayer Corps, he reunites with Genya Shinazugawa, who joined the Demon Slayer Corps the same time as Tanjiro, and the Love Hashira, Mitsuri Kanroji. After hearing about a secret weapon from Mitsuri, Tanjiro heads into the mountain in search of it, where he finds Mist Hashira, Muichiro Tokito, and a boy from the village arguing...",
//         "vote_average": 0.0,
//         "vote_count": 0,
//         "air_date": "2023-04-16",
//         "episode_number": 2,
//         "production_code": "",
//         "runtime": null,
//         "season_number": 4,
//         "show_id": 85937,
//         "still_path": null
//     },
//     "networks": [
//         {
//             "id": 1,
//             "logo_path": "/yS5UJjsSdZXML0YikWTYYHLPKhQ.png",
//             "name": "Fuji TV",
//             "origin_country": "JP"
//         },
//         {
//             "id": 343,
//             "logo_path": "/9rNqtDYAnD6yTOutvHI3synSEs2.png",
//             "name": "Gunma TV",
//             "origin_country": "JP"
//         },
//         {
//             "id": 614,
//             "logo_path": "/hSdroyVthq3CynxTIIY7lnS8w1.png",
//             "name": "Tokyo MX",
//             "origin_country": "JP"
//         },
//         {
//             "id": 861,
//             "logo_path": "/JQ5bx6n7Qmdmyqz6sqjo5Fz2iR.png",
//             "name": "BS11",
//             "origin_country": "JP"
//         },
//         {
//             "id": 879,
//             "logo_path": "/pX3gDCsG8WcQvQbCNJ37t5w0HyG.png",
//             "name": "Tokai Television Broadcasting",
//             "origin_country": "JP"
//         },
//         {
//             "id": 1163,
//             "logo_path": "/1J33ZvSff1VOEt3aC8CyKmj9GEy.png",
//             "name": "Kansai TV",
//             "origin_country": "JP"
//         },
//         {
//             "id": 2478,
//             "logo_path": "/2v82HpzoKRveJEJcGHkeTcktMRM.png",
//             "name": "Tochigi TV",
//             "origin_country": "JP"
//         },
//         {
//             "id": 3535,
//             "logo_path": "/sRcnyMsKdnvMS1mMe7O6ZErUC6H.png",
//             "name": "Fukui TV",
//             "origin_country": "JP"
//         },
//         {
//             "id": 3721,
//             "logo_path": "/uKTzwez1p8tB4dnHMCeDjdN7xlR.png",
//             "name": "Hokkaido Cultural Broadcasting",
//             "origin_country": "JP"
//         },
//         {
//             "id": 4799,
//             "logo_path": "/y1F9WoEjz7MhzjN56im3tVKTd1r.png",
//             "name": "Iwate Menkoi Television",
//             "origin_country": "JP"
//         },
//         {
//             "id": 4839,
//             "logo_path": "/94U1cId5rHGqBScFIg6rgG5lhPz.png",
//             "name": "SAGA TV",
//             "origin_country": "JP"
//         },
//         {
//             "id": 4841,
//             "logo_path": "/1UoF27Pe1BVTEyGxH69kJyz7Uyf.png",
//             "name": "Ishikawa TV",
//             "origin_country": "JP"
//         },
//         {
//             "id": 4851,
//             "logo_path": "/wd94E8WjZwEbu1PLxhNNH0Ny3VT.png",
//             "name": "OHK",
//             "origin_country": "JP"
//         },
//         {
//             "id": 5644,
//             "logo_path": "/832SJcpnozaNWKto6hPSpYvDYQU.png",
//             "name": "TV Shizuoka",
//             "origin_country": "JP"
//         }
//     ],
//     "number_of_episodes": 55,
//     "number_of_seasons": 4,
//     "origin_country": [
//         "JP"
//     ],
//     "original_language": "ja",
//     "original_name": "鬼滅の刃",
//     "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
//     "popularity": 446.625,
//     "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
//     "production_companies": [
//         {
//             "id": 5887,
//             "logo_path": "/m6FEqz8rQECnmfjEwjNhNAlmhCJ.png",
//             "name": "ufotable",
//             "origin_country": "JP"
//         },
//         {
//             "id": 2883,
//             "logo_path": "/rDYExnBV61jGQnkhVVrPN4Yl7O1.png",
//             "name": "Aniplex",
//             "origin_country": "JP"
//         },
//         {
//             "id": 2918,
//             "logo_path": "/gyEWUBWwqrm3H5T2hkERD9LxpOq.png",
//             "name": "Shueisha",
//             "origin_country": "JP"
//         },
//         {
//             "id": 91520,
//             "logo_path": "/wdcFLdFVOPEm3uEp6Hb9OXgi5Zd.png",
//             "name": "STUDIO MAUSU",
//             "origin_country": "JP"
//         },
//         {
//             "id": 197603,
//             "logo_path": "/trixkQVZGWfiioaorPcr4cqXPcR.png",
//             "name": "PANAS STUDIOS",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "JP",
//             "name": "Japan"
//         }
//     ],
//     "seasons": [
//         {
//             "air_date": "2020-08-26",
//             "episode_count": 7,
//             "id": 131803,
//             "name": "Specials",
//             "overview": "",
//             "poster_path": "/tjyZXCLfavRr9InvtWg3RrF5zW2.jpg",
//             "season_number": 0
//         },
//         {
//             "air_date": "2019-04-06",
//             "episode_count": 26,
//             "id": 116882,
//             "name": "Tanjiro Kamado, Unwavering Resolve Arc",
//             "overview": "After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he's lost.",
//             "poster_path": "/x2f3rK7GvxalWsa74H87PeVvsZo.jpg",
//             "season_number": 1
//         },
//         {
//             "air_date": "2021-10-09",
//             "episode_count": 7,
//             "id": 181846,
//             "name": "Mugen Train Arc",
//             "overview": "Tanjiro and his Demon Slayer friends join Flame Hashira Kyojuro Rengoku aboard the Mugen Train, where over 40 passengers disappeared without a trace.",
//             "poster_path": "/eziUGb6S6ZOPj8xLOuk1aj5Uazx.jpg",
//             "season_number": 2
//         },
//         {
//             "air_date": "2021-12-05",
//             "episode_count": 11,
//             "id": 215073,
//             "name": "Entertainment District Arc",
//             "overview": "Tanjiro, Zenitsu, and Inosuke, aided by the Sound Hashira Tengen Uzui, travel to Yoshiwara red light district to hunt down a demon that has been terrorizing the town.",
//             "poster_path": "/92591pAR8Z8TGtvlvK5kxy6MqZD.jpg",
//             "season_number": 3
//         },
//         {
//             "air_date": "2023-04-09",
//             "episode_count": 11,
//             "id": 243774,
//             "name": "Swordsmith Village Arc",
//             "overview": "Tanjiro journeys to a village of swordsmiths and has to explain how his sword was so badly damaged to Hotaru Haganezuka, the smith who made it. While Tanjiro waits for his sword to be repaired, enemies close in. The Mist Hashira, Muichiro Tokito, engages the demons, but he'll need some help from Tanjiro and Genya, another Demon Slayer. It's bad enough that they have to fight two upper-rank demons, but can they handle a foe who can split itself into four separate bodies and regenerate almost instantly?",
//             "poster_path": "/sInwzmBFgCiaaMnOEiPoz9L3Ieq.jpg",
//             "season_number": 4
//         }
//     ],
//     "spoken_languages": [
//         {
//             "english_name": "Japanese",
//             "iso_639_1": "ja",
//             "name": "日本語"
//         }
//     ],
//     "status": "Returning Series",
//     "tagline": "",
//     "type": "Scripted",
//     "vote_average": 8.701,
//     "vote_count": 4982
// }
  constructor(private activatedroute:ActivatedRoute,
              private tmdbmovieServService : TmdbMovieSevService) { }

  ngOnInit(): void {
    this.loader = true

    setTimeout( () => {
        this.activatedroute.queryParamMap.pipe(
            mergeMap( (data:any) => this.tmdbmovieServService.tmdb_tv_in_details(data.get('tmdbTVId')))
        )
        .subscribe( (tv:any) => {
          console.log("TV id --> ",tv);
          this.loader = false
        this.tvseriesDetails = tv
        })
    },3000)
    
  }

}
