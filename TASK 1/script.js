
const jobs = [
    { id: 1, title: "Software Engineer", description: "Develop software solutions", location: "New York, NY", salary: "$100k" },
    { id: 2, title: "Project Manager", description: "Manage software projects", location: "San Francisco, CA", salary: "$120k" },
    { id: 3, title: "UX Designer", description: "Design user experiences", location: "Austin, TX", salary: "$90k" },
    { id: 4, title: "Video grapher", description: "video editing", location: "coimbatore", salary: "$10k" }

];

const applications = [
    { id: 1, jobTitle: "Software Engineer", status: "Submitted" },
    { id: 2, jobTitle: "Project Manager", status: "Submitted" }
];


function loadFeaturedJobs() {
    const featuredJobsContainer = document.getElementById("featured-jobs");
    jobs.slice(0, 2).forEach(job => {
        const li = document.createElement("li");
        li.innerText = job.title;
        li.onclick = () => window.location.href = `job-detail.html?id=${job.id}`;
        featuredJobsContainer.appendChild(li);
    });
}


function loadJobListings() {
    const jobListContainer = document.getElementById("job-list");
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.innerText = job.title;
        li.onclick = () => window.location.href = `job-detail.html?id=${job.id}`;
        jobListContainer.appendChild(li);
    });
}


function loadJobDetail() {
    const params = new URLSearchParams(window.location.search);
    const jobId = params.get('id');
    const job = jobs.find(j => j.id == jobId);

    if (job) {
        document.getElementById("job-title").innerText = job.title;
        document.getElementById("job-description").innerText = job.description;
        document.getElementById("job-location").innerText = `Location: ${job.location}`;
        document.getElementById("job-salary").innerText = `Salary: ${job.salary}`;
    }
}

function loadEmployerJobs() {
    const employerJobsContainer = document.getElementById("employer-jobs");
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.innerText = job.title;
        employerJobsContainer.appendChild(li);
    });
}


function loadCandidateApplications() {
    const candidateApplicationsContainer = document.getElementById("candidate-applications");
    applications.forEach(application => {
        const li = document.createElement("li");
        li.innerText = `${application.jobTitle} - ${application.status}`;
        candidateApplicationsContainer.appendChild(li);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("featured-jobs")) loadFeaturedJobs();
    if (document.getElementById("job-list")) loadJobListings();
    if (document.getElementById("job-title")) loadJobDetail();
    if (document.getElementById("employer-jobs")) loadEmployerJobs();
    if (document.getElementById("candidate-applications")) loadCandidateApplications();
});
