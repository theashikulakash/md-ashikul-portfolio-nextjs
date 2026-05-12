import { FaLink } from "react-icons/fa6";

const Projects = () => {
    const projects = [
        {
            id: "1",
            title: "Object Detection YOLO V3",
            description: "TensorFlow-2.x-YOLOv3 & Yolo V-3 Tiny for University Final Year Project",
            link: "404"
        },
        {
            id: "2",
            title: "2048 Game",
            description: "Modern landing page with interactive sections and fast page loads.",
            link: "https://2048-game-javascript.netlify.app"
        },
        {
            id: "3",
            title: "Currency Converter",
            description: "Modern landing page with interactive sections and fast page loads.",
            link: "https://currency-converter-java-script.netlify.app"
        },
        {
            id: "4",
            title: "QFS E-commerce Website",
            description: "E-commerce website for Quality Food Service",
            link: "https://qfsfoodservice.vercel.app"
        },
        {
            id: "5",
            title: "E-commerce Peak-Summer",
            description: "E-commerce website for Peak-Summer",
            link: "https://peak-summer.vercel.app"
        },
        {
            id: "6",
            title: "Issue Tracker",
            description: "Github Issue Tracking API Based web app",
            link: "https://github-issue-tracker-herocoders.netlify.app"
        },
        {
            id: "7",
            title: "G3 Architecture UI",
            description: "PH Assignment Project",
            link: ""
        },
        {
            id: "8",
            title: "E-commerce UI for Digitools",
            description: "E-commerce UI for Digitools",
            link: "https://digitools-a6-ph.netlify.app"
        },
        {
            id: "9",
            title: "Job Application Tracker",
            description: "Job Application Tracking web app",
            link: "https://job-application-tracker-a4ph.netlify.app"
        },
        {
            id: "10",
            title: "Comunity Tracking Website",
            description: "Comunity Tracking Website with api",
            link: "https://keen-keeper-ph-a7.netlify.app"
        },
        {
            id: "11",
            title: "To-Do Dashboard",
            description: "Fully Customizable To-Do Dashboard",
            link: "https://to-do-s-theashikulakash.netlify.app"
        },
    ];

    return (
        <section className="p-8 ">
            <div className="max-w-10/12 mx-auto space-y-6 rounded-3xl  p-8">
                <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-sky-300 text-center">Projects</p>
                    <h2 className="mt-2 text-3xl font-bold text-white text-center">Selected work.</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    {projects.map((project) => (
                        <article key={project.id} className="rounded-3xl border border-white/10 bg-gray-800/30 p-6">
                            <div className="flex flex-row justify-between">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <a href={project.link} className="flex flex-row text-sky-300 justify-center items-center">
                                    <FaLink />
                                </a>
                            </div>
                            <p className="mt-3 text-slate-300">{project.description}</p>
                        </article>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;
