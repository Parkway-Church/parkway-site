import { a } from "framer-motion/client";

export interface Leader {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export const leadershipData: Leader[] = [
    {
        id: '1',
        name: "Rev. Esther Valdes",
        role: "Senior Minister",
        bio: "Rev. Esther Valdes has faithfully served in the Disciples of Christ denomination for over 20 years. Her spiritual journey began as a preteen when she accepted Jesus and developed a passion for ministry. She has overcome personal challenges with faith, raising her three children as a single mother while pursuing her education, including a Bachelor’s Degree in Psychology, a Master of Divinity from Indiana Wesleyan University, and is currently pursuing her Doctoral degree at Lexington Theological Seminary. In 2019, Rev. Valdes joined Parkway Christian Church as Associate Minister, bringing creativity, excellence, and a welcoming spirit. She was ordained in 2021 and worked alongside Dr. Rev. Charlie Wallace to guide the church through transitions and the challenges of the pandemic.In December 2024, Rev. Valdes was called as the Senior Minister of Parkway Christian Church. She looks forward to leading the congregation with vision, faith, and unity, encouraging others to deepen their relationship with Christ and embrace Gods plans for the future.",
        imageUrl: "/images/leadership/PastorEsther.avif"
    },
    {
        id: '2',
        name: "Nathan Hernandez",
        role: "Worship Director",
        bio: "Nathan joined our family as Parkway's Worship Director in June, 2011.  He came to Parkway after having served as the Music Director at Tampa's First Reformed Church.  There he created and grew their Contemporary Worship service until it rivaled the traditional service in attendance.  Nathan is a graduate of the University of South Florida where he earned a Bachelor of Arts Degree in Music. At USF, Nathan participated in the University Singers, USF Opera Theater and the USF Chamber Singers.  In addition to serving Parkway, Nathan works in the Broward County Public Schools as an elementary general music teacher. He is an instructor of voice and guitar as well. With his extensive experience Nathan says his goal is to instill a love of Jesus through music and to provide music ministries to encourage the development of growing relationships with one another through Christ. Nathan is married to Natalie and they have 2 young daughters.",
        imageUrl: "/images/leadership/JassoNathan_HEIC.avif"
    },
    {
        id: '3',
        name: "Christian Torres",
        role: "Youth Group Leader & Assistant Worship Leader",
        bio: "Christian Hernandez is passionate about equipping students with the necessary tools to live a life dedicated to Jesus. Christian loves helping students grow in their relationship with Christ and to see them share that with others. Christian is currently working to finish his Bachelor’s in Psychology. He has experience working in other youth ministries and youth programs, which have led him to commit to God’s calling for him to work with students. 1 Timothy 4:12",
        imageUrl: "/images/leadership/TorresChristian_HEIC.avif"
    },
    {
        id: '4',
        name: "Letty Aviles",
        role: "Administrative Assistant",
        bio: "For more than 30 years, Letty worked in the banking industry in the Finance Department, as Manager of Regulatory Reports in Puerto Rico. Letty and her husband Fernando were members of the Disciples Church of Buena Vista, PR were they served and participated in the various events and life groups. In December 2017 they decided to move to Florida, after Hurricane Maria.  They have been married for 37 years and have two daughters and four grandchildren. When Letty and Fernando came to Florida they were searching for a Disciples of Christ congregation and found Parkway Christian Church and Schools. Letty felt the call from God to serve as a volunteer secretary in Parkway on June 2022. In the short time she assisted our congregation as the volunteer secretary, Parkway recognized her excellent organizational skills and work ethics and became our official Administrative Assistant on July 28, 2022.",
        imageUrl: "/images/leadership/AvilesLetty_HEIC.avif"
    },
    {
        id: '5',
        name: "Matilde Licea",
        role: "Custodian",
        bio: "I was born and raised in Mexico, where I worked at a local church, not as a member but simply because I enjoyed the work and the people I met there. In 1997, I moved to California, seeking new opportunities and a fresh start. During that time, my life took a significant turn when my husband helped me escape a difficult situation, rescuing me from an abusive relationship and giving me a chance to begin anew. After relocating, my husband’s uncle invited me to move to Florida, where I embraced new opportunities and a supportive community. Through various jobs and experiences, I eventually found my way to Parkway Christian Church, where I currently work. Although I was initially skeptical about attending church, my perspective changed when a neighbor invited me to visit their church. That simple invitation transformed my life, leading me on a journey of faith that has profoundly shaped who I am today.I am now passionate about growing in my relationship with God, knowing that He has a purpose and plan for my life. Being at the church has allowed me to develop spiritually and discover the joy of serving others. I’m also a proud mother of one daughter and a grandmother to two wonderful grandchildren who still live in Mexico. Outside of my work at the church, I dedicate my time to caring for the elderly, finding fulfillment in supporting and uplifting those around me.",
        imageUrl: "/images/leadership/LiceaMatilde.avif"
    }
];
