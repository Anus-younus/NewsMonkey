import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {
    articles =  [
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Meredith Deliso, Leah Sarnoff",
            "title": "Former Uvalde school police chief charged with 10 counts of 'abandoning and endangering' Robb Elementary survivors - ABC News",
            "description": "He's accusing of failing to identify the shooting as an active shooter incident.",
            "url": "https://abcnews.go.com/US/uvalde-shooting-grand-jury-indictment/story?id=111490997",
            "urlToImage": "https://i.abcnewsfe.com/a/613dbf29-defa-4d26-9deb-8427dfdc872b/uvalde-robb-school-gty-jt-240627_1719526211906_hpMain_16x9.jpg?w=1600",
            "publishedAt": "2024-06-28T17:39:33Z",
            "content": "Former Uvalde School District Police Chief Pete Arredondo has been indicted in connection with the investigation into the 2022 mass shooting at Robb Elementary School in Uvalde, Texas, court records … [+3636 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jake Fischer",
            "title": "Brandon Ingram expected to become available for trade as wing market comes into focus - Yahoo Sports",
            "description": "Ingram’s trade market could heat up if his representation and the Pelicans’ front office come short of finding a long-term extension agreement.",
            "url": "https://sports.yahoo.com/brandon-ingram-expected-to-become-available-for-trade-as-wing-market-comes-into-focus-150152771.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/LT.qYQKY6HwMmf.rZXoubw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/38005ac0-355e-11ef-bfff-a908e0da8ae2",
            "publishedAt": "2024-06-28T17:08:49Z",
            "content": "With the 2024 NBA Draft over, the leagues transaction market is expected to continue with trade activity over the weekend, league sources told Yahoo Sports, as various clubs look to add players for n… [+7092 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Ana Diaz",
            "title": "Jujutsu Kaisen fans keep on winning with new Megan Thee Stallion song - Polygon",
            "description": "Megan Thee Stallion references anime like Jujutsu Kaisen and Naruto on the song ‘Otaku Hot Girl.’",
            "url": "https://www.polygon.com/24188110/megan-thee-stallion-otaku-hot-girl-jujutsu-kaisen-yuji-itadori-gojo",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/9Z_bZ5x4o0hxJN3Es6QvnXFiU6o=/0x197:2754x1639/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25510220/megantheestallionjjk.jpg",
            "publishedAt": "2024-06-28T17:02:41Z",
            "content": "Yuji Itadori might just be a high schooler fighting for his life in the Jujutsu Kaisen anime, but now hes caught the attention of a global star IRL. Rapper Megan Thee Stallionofficial hot girl and an… [+2689 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "TARA COPP, LOLITA C. BALDOR",
            "title": "US will remove Gaza aid pier due to weather and may not put it back, officials say - The Associated Press",
            "description": "U.S. officials say the pier built by the U.S. military to bring aid to Gaza is being removed due to weather to protect it, and the U.S. is considering not re-installing it unless aid begins flowing out into the population again. While the military has helped …",
            "url": "https://apnews.com/article/gaza-pier-humanitarian-aid-f3e21c072630c0d9cb9498d3a0e27a55",
            "urlToImage": "https://dims.apnews.com/dims4/default/75c5593/2147483647/strip/true/crop/8386x4717+0+437/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F0a%2Fe98f944d1a1dc60a4c3482ea41a7%2F89d71aaa313247cabe35b8f8ad2cd372",
            "publishedAt": "2024-06-28T16:57:00Z",
            "content": "WASHINGTON (AP) The pier built by the U.S. military to bring aid to Gaza has been removed due to weather to protect it, and the U.S. is considering not re-installing it unless the aid begins flowing … [+3116 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Annie Gowen",
            "title": "Iowa's highest court rules in favor of six-week abortion ban - The Washington Post",
            "description": "The ban, passed last summer, was among many conservative states’ efforts to end abortion in the wake of the U.S. Supreme Court overturning Roe v. Wade.",
            "url": "https://www.washingtonpost.com/nation/2024/06/28/iowa-abortion-ban-court/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZLFJCW3H4RAL3GRSGR622SWI6Q_size-normalized.JPG&w=1440",
            "publishedAt": "2024-06-28T16:41:02Z",
            "content": "Iowas Supreme Court on Friday allowed a six-week ban on abortion to take effect, one of the latest rulings to restrict abortion access since the U.S. Supreme Courts 2022 decision ending federal prote… [+5701 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KTLA Los Angeles"
            },
            "author": "Marc Sternfield",
            "title": "Poll: Could Gavin Newsom defeat Donald Trump? - KTLA Los Angeles",
            "description": "California Governor Gavin Newsom, acting as a surrogate for President Biden following Thursday night’s debate, once again deflected questions over whether he might potentially replace Biden on the Democratic ticket. “No, our nominee is Joe Biden,” Newsom told…",
            "url": "https://ktla.com/news/california/newsom-vs-trump-poll/",
            "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2024/06/GettyImages-2158945816-e1719591784484.jpg?w=1280",
            "publishedAt": "2024-06-28T16:33:43Z",
            "content": "California Governor Gavin Newsom, acting as a surrogate for President Biden following Thursday night’s debate, once again deflected questions over whether he might potentially replace Biden on the De… [+1413 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "A harmless asteroid will whiz past Earth Saturday. Here's how to spot it - The Associated Press",
            "description": null,
            "url": "https://admin.google.com/ServiceNotAllowed",
            "urlToImage": null,
            "publishedAt": "2024-06-28T16:24:00Z",
            "content": "We are sorry, but you do not have access to this service. Some reasons why you may not have access:\r\n<ul><li>Your account is managed by an organization that has this service turned off for its users.… [+306 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kaitlan Collins, Kasie Hunt, Phil Mattingly, Abby Phillip, Fredreka Schouten, Jeff Zeleny",
            "title": "Analysis and commentary on CNN’s presidential debate - CNN",
            "description": "Read CNN’s analysis and commentary of the first 2024 presidential debate between President Joe Biden and former President Donald Trump in Atlanta.",
            "url": "https://www.cnn.com/election/2024/analysis-commentary-cnn-debate",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/videothumbnails/44616251-64023996-generated-thumbnail.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-06-28T16:10:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Justice.gov"
            },
            "author": null,
            "title": "Attorney General Merrick B. Garland Statement on the Supreme Court's Decision in Fischer v. United States - Department of Justice",
            "description": "The Justice Department issued the following statement from Attorney General Merrick B. Garland on the Supreme Court’s decision in Fischer v. United States:",
            "url": "https://www.justice.gov/opa/pr/attorney-general-merrick-b-garland-statement-supreme-courts-decision-fischer-v-united-states",
            "urlToImage": "https://www.justice.gov/sites/all/modules/features/doj_sharing/images/doj-seal-fb.jpg",
            "publishedAt": "2024-06-28T15:15:27Z",
            "content": "The Justice Department issued the following statement from Attorney General Merrick B. Garland on the Supreme Courts decision in Fischer v. United States:\r\nJanuary 6 was an unprecedented attack on th… [+825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Financial Times"
            },
            "author": "Harriet Agnew, Sarah White",
            "title": "Wealthy French make post-election contingency plans - Financial Times",
            "description": "‘The question we get asked most frequently is if money is safe in France’",
            "url": "https://www.ft.com/content/a61b6b66-1048-410f-8d76-eb121b4fcb1e",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fd001d4da-14fb-4580-b4b0-f814814f760f.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2024-06-28T15:00:30Z",
            "content": "Frances wealthy are making contingency plans for a far-right or leftwing government, unnerved by the prospect of tax hikes and the potential reinstatement of a divisive wealth tax. \r\nSeveral lawyers,… [+7101 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "Report: Apple Planning to Debut New Battery Replacement Method With iPhone 16 - MacRumors",
            "description": "Apple is working on technology to simplify iPhone battery replacement that could debut later this year, The Information reports.  Alleged iPhone 16...",
            "url": "https://www.macrumors.com/2024/06/28/new-battery-replacement-method-with-iphone-16/",
            "urlToImage": "https://images.macrumors.com/t/4QjgcoERAPng0Isf8u4vbuPYdPY=/2048x/article-new/2023/11/iphone-16-pro-battery-kosutami.jpg",
            "publishedAt": "2024-06-28T14:38:41Z",
            "content": "Apple is working on technology to simplify iPhone battery replacement that could debut later this year, The Information reports.\r\nThe move comes in response to a new EU law requiring smartphone manuf… [+2141 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "MARK SHERMAN",
            "title": "The Supreme Court weakens federal regulators, overturning decades-old Chevron decision - The Associated Press",
            "description": "The Supreme Court has upended a 40-year-old decision that made it easier for the federal government to regulate the environment, public health, workplace safety and consumer protections. The court Friday delivered a far-reaching and potentially lucrative vict…",
            "url": "https://apnews.com/article/supreme-court-chevron-regulations-environment-5173bc83d3961a7aaabe415ceaf8d665",
            "urlToImage": "https://dims.apnews.com/dims4/default/cf6b607/2147483647/strip/true/crop/5813x3270+0+303/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F51%2F3f%2F6f0378b6dd9a5236d979f8a34b27%2F28e6b41976cf49d89f356914c289d771",
            "publishedAt": "2024-06-28T14:26:00Z",
            "content": "WASHINGTON (AP) The Supreme Court on Friday upended a 40-year-old decision that made it easier for the federal government to regulate the environment, public health, workplace safety and consumer pro… [+5733 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2024 NBA Draft team grades: Spurs, Jazz, Thunder score A+ while Bucks, Pistons make baffling selections - CBS Sports",
            "description": "Let's take a look at how each team fared on draft night",
            "url": "https://www.cbssports.com/nba/news/2024-nba-draft-team-grades-spurs-jazz-thunder-score-a-while-bucks-pistons-make-baffling-selections/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/06/28/66163acd-7b5a-43e2-8e66-e8bc3b738e7f/thumbnail/1200x675/0457d10b65eb7afba3db82763ec69317/cody-williams-jazz-g.jpg",
            "publishedAt": "2024-06-28T14:24:00Z",
            "content": "The first two-day NBA Draft is officially in the books, and the burning questions we've had for weeks -- about who would go No. 1, about who might trade up in the lottery, about where Donovan Clingan… [+760 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "US inflation ebbs in May as goods prices fall - Reuters",
            "description": null,
            "url": "https://www.reuters.com/markets/us/us-inflation-cools-may-consumer-spending-rises-moderately-2024-06-28/",
            "urlToImage": null,
            "publishedAt": "2024-06-28T14:11:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Anant Gupta, Karishma Mehrotra",
            "title": "Delhi airport roof collapse from monsoon crushes cars - The Washington Post",
            "description": "India has seen an infrastructure boom to meet rising demands for transportation but there have been criticisms about poor maintenance and oversight of building.",
            "url": "https://www.washingtonpost.com/world/2024/06/28/india-delhi-airport-roof-collapse/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2UQDDUR24AO33V4CZFNPUE32AM_size-normalized.jpg&w=1440",
            "publishedAt": "2024-06-28T14:05:16Z",
            "content": "NEW DELHI Heavy monsoon rains in the Indian capital of New Delhi brought part of the airport terminal roof crashing down on parked cars, killing at least one person and injuring eight others, accordi… [+3824 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Daniel Lewis",
            "title": "Hear Gov. Shapiro’s message to Democrats worried about Biden’s performance - CNN",
            "description": "Governor Josh Shapiro (D-PA) discusses President Joe Biden’s performance in the debate against former President Donald Trump and shares a message to those worried about Biden’s capabilities.",
            "url": "https://www.cnn.com/2024/06/28/politics/video/josh-shapiro-joe-biden-debate-performance-cnc-digvid",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/shapiro.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-06-28T13:37:00Z",
            "content": "Governor Josh Shapiro (D-PA) discusses President Joe Biden's performance in the debate against former President Donald Trump and shares a message to those worried about Biden's capabilities."
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Josh Schafer",
            "title": "Nike stock sinks after company projects larger sales decline than expected in 2025 - Yahoo Finance",
            "description": "Nike's earnings report comes as the stock has slumped over the past year amid slowing sales growth.",
            "url": "https://finance.yahoo.com/news/nike-stock-sinks-after-company-projects-larger-sales-decline-than-expected-in-2025-192129443.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/gviD9OKnqYUEXg2oJBeSAw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTI-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/ee9b90a0-33e3-11ef-a3e1-98108904e31f",
            "publishedAt": "2024-06-28T13:34:12Z",
            "content": "Nike (NKE) stock fell as much as 17% on Friday after the retailer said it expects revenue to decline more than previously thought in the coming year.\r\nThe company said Thursday it expects revenue to … [+2922 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Live Science"
            },
            "author": "Ben Turner",
            "title": "Shattered Russian satellite forces ISS astronauts to take shelter in stricken Starliner capsule - Livescience.com",
            "description": "ISS astronauts, including the stranded Butch Willmore and Sunni Williams, have sought refuge inside their docked spacecraft after the Resurs-P1 satellite splintered apart in orbit.",
            "url": "https://www.livescience.com/space/shattered-russian-satellite-forces-iss-astronauts-to-take-shelter-in-stricken-starliner-capsule",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Sndrwxo7neuNq4pNk2F9AE-1200-80.jpg",
            "publishedAt": "2024-06-28T13:30:04Z",
            "content": "Astronauts aboard the International Space Station (ISS) have been forced to take shelter inside the docked Starliner spacecraft after a defunct Russian satellite broke apart in orbit, sending potenti… [+2837 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5google.com"
            },
            "author": "Ben Schoon",
            "title": "Galaxy Z Fold 6 and Z Flip 6 leak in detailed renders [Gallery] - 9to5Google",
            "description": "A new set of leaks of the Galaxy Z Fold 6 and Flip 6 show off Samsung's new foldables in the most detail we've seen so far.",
            "url": "http://9to5google.com/2024/06/28/samsung-galaxy-z-fold-6-flip-6-render-leaks/",
            "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/06/galaxy-z-fold-flip-6-ev.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2024-06-28T13:15:00Z",
            "content": "Ahead of its launch event on July 10, new leaks are showing off Samsung’s new foldables, the Galaxy Z Fold 6 and Flip 6, in the most detail we’ve seen to date.\r\nUpdate 6/28: Added more leaked images.… [+1996 chars]"
        }
    ]
    constructor(){
        super()
        console.log("Hee hOO");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=574dfb110b80408e9956984f758a744c"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData.articles);
        this.setState({articles: parseData.articles})
    }
  render() {
    return (
      <>
     <div className="container my-3">
     <h1>This news is very infullence</h1>
     <div className="row">
     {this.state.articles.map((element) => {
        return <div className="col-md-4" >
            <NewsItem title={element.title.slice(0, 45)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>
    })}
      </div>
     </div>
      </>
    )
  }
}
