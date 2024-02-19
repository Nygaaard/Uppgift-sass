if (window.location.pathname.includes("diagram")) {
  const ctx = document.getElementById("circleChart");

  const url = "https://studenter.miun.se/~mallar/dt211g/";

  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch {
      console.log(error);
    }
  }

  async function getTopPrograms() {
    const data = await getData();

    let sortedCourses = data
      .filter((course) => course.type === "Program")
      .sort((a, b) => b.applicantsTotal - a.applicantsTotal);
    let topCourses = sortedCourses.slice(0, 5);

    return topCourses;
  }

  async function displayPrograms() {
    const topPrograms = await getTopPrograms();

    const programType = topPrograms.map((program) => program.type);
    const programNames = topPrograms.map((program) => program.name);
    const numberOfApplicants = topPrograms.map(
      (program) => program.applicantsTotal
    );

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: programNames,
        datasets: [
          {
            label: "# of Votes",
            data: numberOfApplicants,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  displayPrograms();
}
