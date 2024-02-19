if (window.location.pathname.includes("diagram")) {
  const url = "https://studenter.miun.se/~mallar/dt211g/";
  const ctx = document.getElementById("myChart");

  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch {
      console.log(error);
    }
  }
  async function getTopCourses() {
    const data = await getData();
    let sortedCourses = data
      .filter((course) => course.type === "Kurs")
      .sort((a, b) => b.applicantsTotal - a.applicantsTotal);
    let topCourses = sortedCourses.slice(0, 6);

    return topCourses;
  }

  async function displayCourses() {
    const topCourses = await getTopCourses();

    const courseType = topCourses.map((course) => course.type);
    const courseNames = topCourses.map((course) => course.name);
    const numberOfApplicants = topCourses.map(
      (course) => course.applicantsTotal
    );

    console.log(courseType);
    console.log(courseNames);
    console.log(numberOfApplicants);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: courseNames,
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
  displayCourses();
}
