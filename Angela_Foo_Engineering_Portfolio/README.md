# Angela Foo — Manufacturing + Mechanical Design Portfolio

A responsive, minimalist portfolio website showcasing classroom engineering projects first, with industry experience as supporting context.

## Open the website

Extract the ZIP, then open `index.html` in a modern browser. The site is plain HTML, CSS, and JavaScript; no development environment or internet connection is required. To publish, upload the *contents* of this folder to GitHub Pages, Netlify, or another static host.

## Featured case studies

- **`fixture.html` — Utility Blade CNC Fixture:** The original IME 450 workholding case study, with the CNC machine installation photograph as its homepage and case-study cover. All three fixture photographs remain intact.
- **`injection.html` — Injection-Molded Screwdriver:** New case study for the IME 450 screwdriver project. The page includes the user's four uploaded photos (mold in the CNC mill, completed mold half, Morgan press, CAD toolpaths), the finished screwdriver prototype image extracted from the uploaded project report, selected engineering drawing pages, and a link to the six-page drawing package.
- **`project.html` / `projects.js`:** Additional course projects awaiting original photos and reports. An older bookmarked `?project=injection-mold` link redirects to the completed case study.

## Content and accuracy notes

The mold page uses the team final report by Angela Foo and Brynn Bajema and Angela's engineering drawings as primary sources. It distinguishes observed molding settings and results from **estimated** production cost. Reported values include a roughly 3-minute cycle, 8,000 psi injection pressure, 12,000 lbf clamp force, and an estimated $11.19 per unit at a modeled 12,000-unit production quantity.

**Quantity discrepancy:** The original course assignment specifies 10,000 units/year, while the team's report costs a 12,000-unit run. This is disclosed in the case study rather than silently choosing one. The project page also explains that the 0.944-inch intended width measured 0.915 inch in the resulting prototypes due to a mold-stock-height/setup issue; the blade pocket was re-machined and functional prototypes were produced.

The fixture assignment specifies a minimum clamping-force safety factor of 3.0 and under-60-second part loading/unloading, but the current materials do not verify final measured performance on either target. The fixture page labels those as requirements.

## Files to edit

- `index.html` — homepage and project ordering
- `fixture.html` — fixture case study
- `injection.html` — injection molding case study
- `projects.js` — other academic projects
- `styles.css` — colors, layout, and responsive design
- `assets/` — optimized photographs, illustration images, engineering drawing PDF, and résumé

## Before publishing

Please confirm permission to share team work and any company logos visible on the educational prototypes. The finished screwdrivers use branded artwork but this student project is not an official affiliation or endorsement. Also consider whether to publicly expose the phone number on `assets/Angela_Foo_Resume.pdf`.


## Added: lightweight bracket optimization (IME 432)

The project is featured third on the homepage and has a dedicated `bracket.html` page.
Its original figures were extracted from the uploaded IME 432 final design review.
Images of the 316L printed part, generative CAD model, simulation, lattice concept, shape-optimized concept, and dimensional qualification table are included locally in `/assets`.
The source presentation is included as `assets/IME_432_Additive_Bracket_Design_Review.pdf`.

The 72.86% mass reduction and 0.019 mm displacement are **reported design/simulation results**, not independent physical measurements. The report notes qualification deviations. Cost estimates are course-project estimates, not quotations.

## Added: Geneva Wheel Mechanical Assembly (IME 244)

- `geneva.html` is the fourth visual case study, after the fixture, injection molding, and additive bracket pages.
- The homepage uses the real assembled-mechanism photograph (`assets/geneva-assembled.webp`). Two other uploaded images show the formed support and laser processing.
- The original one-page academic project brief is copied to `assets/IME_244_Geneva_Wheel_Project_Brief.pdf`.
- The brief describes the six-week lab sequence of CAD/fits, CNC/CAM, injection molding, laser processing, waterjet cutting, and tolerance-stack-up assembly. Since it does not report measured results or specify Angela's individual tasks, neither was invented. The new case study focuses on the assembly process and course objectives; add personalized details and measurements later.

## Updated: Angela’s personal design contribution to IME 244

The Geneva case study now prominently credits Angela with designing and customizing the **person-shaped formed-metal holder** shown under the completed mechanism. A dedicated “My design contribution” section and the homepage summary describe her work in the first person. The supporting images, machining sequence, and original project brief are retained. No unsupported quantitative results or details of specific decorative features were added.


## Added: Cal Poly Racing / Battery Systems Lead

- A new **Cal Poly Racing** feature appears after the four classroom project case studies, before the process/experience sections. This keeps coursework at the center while giving student-team engineering experience its own visual treatment.
- `racing.html` is a dedicated photo-rich page. Images include an accumulator assembly, a cylindrical-cell module, a composite fabrication setup, a top-down view of electrical integration, and race-car packaging context.
- Personal contribution claims use Angela's résumé: **Battery Systems Lead** (June 2023–June 2024), enclosure design for 480 battery cells, integration of thermal management and data acquisition, separation requirements, carbon fiber/polycarbonate/electrical assembly participation, assisting carbon-fiber layup, and leading a Critical Design Review.
- No unreported safety qualification, battery performance, cell chemistry, exact voltage, or competition results are claimed. Captions are based on visible images and confirmed project role.
- Photographs are resized to WebP for fast loading and remain stored locally in `assets/racing-*.webp`. Please confirm your student team permits publishing these photos publicly.

## Homepage heading refresh

The homepage section title is now **Selected Projects**. Featured project badges and links use **Project** instead of **Case Study** for simpler labeling. All portfolio projects, images, and experience sections are unchanged.
