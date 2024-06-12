import ImageVideoPlay from "../../assets/video-play.svg";

export default function SecVideoPlay() {
  return (
    <div className="col-span-2">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <img src={ImageVideoPlay} alt="" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">
          Frontend | Day 1 | Basics of HTML
        </h1>
        <div className="h-64 overflow-y-auto border-[1px] border-black/50 p-2 text-black/80">
          <p>Credit by Devsnests</p>
          <p className="mt-4">
            Resources and assignments given on the website check it out!
            https://devsnest.in 3 steps to join the course: 1. Sign up on
            https://devsnest.in/?ref=yt and apply for the course. 2. Create your
            discord account and join our 20K member strong tech community
            https://devsnest.in/discord 3. Join our WhatsApp group for updates
            and notifications https://devsnest.in/whatsapp How to join group:
            https://water-pin-778.notion.site/Gro... Gaurav:
            https://linktr.ee/gaurav.sen Kshitiz: / kshitizmi. . /
            miglanikshitiz Vedansh: / vedanshgarg / vedansh_garg Timecodes 0:00
            - Intro 1:41 - Instructor and Bootcamp Intro 3:50 - Introduction to
            Web-Development 6:45 - Introduction to Frontend 8:55 - Basic
            Requirements for Session 10:25 - Creating the first HTML Document
            12:33 - Basic Tags to define HTML Document 14:47 - head tag in html
            19:33 - body tag in html 22:00 - Importance of viewport 27:37 -
            Anatomy of HTML Element 29:33 - Understanding heading Tags 32:46 -
            Commenting in HTML 38:08 - paragraph tag in HTML 45:43 - lists in
            HTML 50:15 - nesting of tags in HTML 54:00 - anchor tag in HTML
            1:01:40 - image tag in HTML 1:14:37 - dividing the pages into
            sections using rule tag 1:15:57 - Session Break 1:25:00 -HomeWork
            for the session Devsnest Education which makes you financially
            independent New batch launching Devsnest provides a 6+ month
            mentorship program. A few things we offer to students : Six months
            course covering everything they would need to become a rockstar
            developer from Full-stack(Both backend and frontend) to Data
            structures A platform that connects them with a super pumped up
            crowd to learn with and collaborate in projects Mentorship from the
            tech industry&apos;s top tech professionals from companies like
            Amazon, Microsoft, Google, etc., all of them working to help the
            students to reach their maximum potential. JOBS. We bring job
            opportunities, freelancing projects, and internships for the
            students
          </p>
        </div>
      </div>
    </div>
  );
}
