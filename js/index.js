// CSC Heat Outline

// TermApp
let termApp = Vue.createApp({
  data() {
    return {
      selectedTerm: 'Fall',
      terms: [
        { text: 'Fall', value: 'Fall' },
        { text: 'Spring', value: 'Spring' },
        { text: 'Summer', value: 'Summer' },
      ]
    }
  }
}).mount('#v-model-select-term')

// YearApp
let yearApp = Vue.createApp({
  data() {
    return {
      selectedYear: '2021',
      years: [
        { text: '2021', value: '2021' },
        { text: '2020', value: '2020' },
        { text: '2019', value: '2019' },
        { text: '2018', value: '2018' },
        { text: '2017', value: '2017' },
        { text: '2016', value: '2016' },
        { text: '2015', value: '2015' },
        { text: '2014', value: '2014' },
        { text: '2013', value: '2013' },
        { text: '2012', value: '2012' },
        { text: '2011', value: '2011' },
        { text: '2010', value: '2010' },
        { text: '2009', value: '2009' },
        { text: '2008', value: '2008' },
        { text: '2007', value: '2007' },
        { text: '2006', value: '2006' },
        { text: '2005', value: '2005' },
        { text: '2004', value: '2004' },
        { text: '2003', value: '2003' },
        { text: '2002', value: '2002' },
        { text: '2001', value: '2001' },
        { text: '2000', value: '2000' },
      ]
    }
  }
}).mount('#v-model-select-year')

// CourseApp
let courseApp = Vue.createApp({
  data() {
    return {
      selectedCourse: 'CSC 110',
      courses: [
        { text: 'CSC 100', value: 'CSC 100' },
        { text: 'CSC 101', value: 'CSC 101' },
        { text: 'CSC 105', value: 'CSC 105' },
        { text: 'CSC 106', value: 'CSC 106' },
        { text: 'CSC 110', value: 'CSC 110' },
        { text: 'CSC 111', value: 'CSC 111' },
        { text: 'CSC 115', value: 'CSC 115' },
        { text: 'CSC 116', value: 'CSC 116' },
        { text: 'CSC 130', value: 'CSC 130' },
        { text: 'CSC 167', value: 'CSC 167' },
        { text: 'CSC 205', value: 'CSC 205' },
        { text: 'CSC 225', value: 'CSC 225' },
        { text: 'CSC 226', value: 'CSC 226' },
        { text: 'CSC 230', value: 'CSC 230' },
        { text: 'CSC 305', value: 'CSC 305' },
        { text: 'CSC 320', value: 'CSC 320' },
        { text: 'CSC 322', value: 'CSC 322' },
        { text: 'CSC 330', value: 'CSC 330' },
        { text: 'CSC 349A', value: 'CSC 349A' },
        { text: 'CSC 350', value: 'CSC 350' },
        { text: 'CSC 355', value: 'CSC 355' },
        { text: 'CSC 360', value: 'CSC 360' },
        { text: 'CSC 361', value: 'CSC 361' },
        { text: 'CSC 370', value: 'CSC 370' },
        { text: 'CSC 371', value: 'CSC 371' },
        { text: 'CSC 375', value: 'CSC 375' },
        { text: 'CSC 411', value: 'CSC 411' },
        { text: 'CSC 421', value: 'CSC 421' },
        { text: 'CSC 422', value: 'CSC 422' },
        { text: 'CSC 423', value: 'CSC 423' },
        { text: 'CSC 425', value: 'CSC 425' },
        { text: 'CSC 426', value: 'CSC 426' },
        { text: 'CSC 428A', value: 'CSC 428A' },
        { text: 'CSC 429', value: 'CSC 429' },
        { text: 'CSC 435', value: 'CSC 435' },
        { text: 'CSC 445', value: 'CSC 445' },
        { text: 'CSC 446', value: 'CSC 446' },
        { text: 'CSC 449', value: 'CSC 449' },
        { text: 'CSC 454', value: 'CSC 454' },
        { text: 'CSC 460', value: 'CSC 460' },
        { text: 'CSC 461', value: 'CSC 461' },
        { text: 'CSC 462', value: 'CSC 462' },
        { text: 'CSC 463', value: 'CSC 463' },
        { text: 'CSC 464', value: 'CSC 464' },
        { text: 'CSC 466', value: 'CSC 466' },
        { text: 'CSC 467', value: 'CSC 467' },
        { text: 'CSC 471', value: 'CSC 471' },
        { text: 'CSC 472', value: 'CSC 472' },
        { text: 'CSC 473', value: 'CSC 473' },
        { text: 'CSC 475', value: 'CSC 475' },
        { text: 'CSC 482A', value: 'CSC 482A' },
        { text: 'CSC 482B', value: 'CSC 482B' },
        { text: 'CSC 482C', value: 'CSC 482C' },
        { text: 'CSC 482D', value: 'CSC 482D' },
        { text: 'CSC 483A', value: 'CSC 483A' },
        { text: 'CSC 483B', value: 'CSC 483B' },
        { text: 'CSC 483C', value: 'CSC 483C' },
        { text: 'CSC 483D', value: 'CSC 483D' },
        { text: 'CSC 484A', value: 'CSC 484A' },
        { text: 'CSC 484B', value: 'CSC 484B' },
        { text: 'CSC 484C', value: 'CSC 484C' },
        { text: 'CSC 484D', value: 'CSC 484D' },
        { text: 'CSC 485A', value: 'CSC 485A' },
        { text: 'CSC 485B', value: 'CSC 485B' },
        { text: 'CSC 485C', value: 'CSC 485C' },
        { text: 'CSC 485D', value: 'CSC 485D' },
        { text: 'CSC 485E', value: 'CSC 485E' },
        { text: 'CSC 485F', value: 'CSC 485F' },
        { text: 'CSC 485G', value: 'CSC 485G' },
        { text: 'CSC 485H', value: 'CSC 485H' },
        { text: 'CSC 486A', value: 'CSC 486A' },
        { text: 'CSC 486B', value: 'CSC 486B' },
        { text: 'CSC 486C', value: 'CSC 486C' },
        { text: 'CSC 486D', value: 'CSC 486D' },
        { text: 'SENG 265', value: 'SENG 265' },
        { text: 'SENG 275', value: 'SENG 275' },
        { text: 'SENG 310', value: 'SENG 310' },
        { text: 'SENG 321', value: 'SENG 321' },
        { text: 'SENG 330', value: 'SENG 330' },
        { text: 'SENG 350', value: 'SENG 350' },
        { text: 'SENG 360', value: 'SENG 360' },
        { text: 'SENG 371', value: 'SENG 371' },
        { text: 'SENG 380', value: 'SENG 380' },
        { text: 'SENG 399', value: 'SENG 399' },
        { text: 'SENG 401', value: 'SENG 401' },
        { text: 'SENG 411', value: 'SENG 411' },
        { text: 'SENG 421', value: 'SENG 421' },
        { text: 'SENG 422', value: 'SENG 422' },
        { text: 'SENG 426', value: 'SENG 426' },
        { text: 'SENG 435', value: 'SENG 435' },
        { text: 'SENG 440', value: 'SENG 440' },
        { text: 'SENG 460', value: 'SENG 460' },
        { text: 'SENG 461', value: 'SENG 461' },
        { text: 'SENG 466', value: 'SENG 466' },
        { text: 'SENG 468', value: 'SENG 468' },
        { text: 'SENG 474', value: 'SENG 474' },
        { text: 'SENG 475', value: 'SENG 475' },
        { text: 'SENG 480A', value: 'SENG 480A' },
        { text: 'SENG 480B', value: 'SENG 480B' },
        { text: 'SENG 480C', value: 'SENG 480C' },
        { text: 'SENG 480D', value: 'SENG 480D' },
        { text: 'SENG 490', value: 'SENG 490' },
        { text: 'SENG 499', value: 'SENG 499' },
      ]
    }
  }
}).mount('#v-model-select-course')

// Selected Course Data
let courses = Vue.createApp({
  data() {
    return {
      courses: [
        {
          calendar: 'https://web.uvic.ca/calendar/CDs/CSC/110.html',
          course: 'CSC 110',
          link: 'https://heat.csc.uvic.ca/coview/course/2021091/CSC110',
          term: 'Fall',
          year: '2021',
        }
      ]
    }
  }
}).component('course-information', {
  props: [
    'calendar',
    'course',
    'link',
    'term',
    'year',
  ],
  template: `
    <section class="row gy-3">
      <div class="col-12">
        <h2>{{ course }} - {{ term }} {{ year }}</h2>
        <p class="small-spacing">Heat Outline: <a v-bind:href="link" class="text-break" target="_blank">{{ link }}</a></p>
        <p class="small-spacing">Calendar Entry: <a v-bind:href="calendar" class="text-break" target="_blank">{{ calendar }}</a></p>
      </div>
      <div class="col-12">
        <h3>Heat Outline Preview</h3>
        <div style="position:relative; padding-top:56.25%;">
          <iframe v-bind:src="link" frameborder="0" allowfullscreen
                  style="position:absolute; top:0; left:0; width:100%; height:100%;"
          ></iframe>
        </div>
      </div>
    </section>
  `
}).mount('#courseInformation')

// Generate Course Data
let generate = () => {
  // Get Selected Course Information
  let course = document.getElementById('course').value;
  let year = document.getElementById('year').value;
  let term = document.getElementById('term').value;

  // Remove Space from Course
  let courseLink = course.split(" ").join("")

  // Grad Course Info and Course Name
  let courseInfo = course.split(" ");
  let courseName = courseInfo[0];
  let courseCode = courseInfo[1];

  // Assign Terms to Numerical Values
  let termLink;
  if (term === 'Fall') {
    termLink = '09'
  } else if (term === 'Spring') {
    termLink = '01'
  } else if (term === 'Summer') {
    termLink = '05'
  }

  // Create Calendar Link
  let calendar = `https://web.uvic.ca/calendar/CDs/${courseName}/${courseCode}.html`;

  // Create Outline Link
  let link = `https://heat.csc.uvic.ca/coview/course/${year}${termLink}1/${courseLink}`;

  // Remove Previous Course Data
  courses.courses.splice(0);

  // Add New Course Data
  courses.courses.push({
    course: course,
    year: year,
    link: link,
    calendar: calendar,
    term: term
  });
}

// Prevents Form Refresh On Submit
// Keyboard Submit
document.getElementById('course').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('generateOutline').click();
  }
});
document.getElementById('year').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('generateOutline').click();
  }
});
document.getElementById('term').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('generateOutline').click();
  }
});