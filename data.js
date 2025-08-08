const charities = [
  {
    "name": "American Red Cross",
    "description": "Provides emergency assistance, disaster relief, and disaster preparedness education.",
    "website": "https://www.redcross.org",
    "keywords": [
      "blood",
      "disaster",
      "relief",
      "emergency",
      "donate"
    ]
  },
  {
    "name": "Pencils of Promise",
    "description": "Building schools and increasing educational opportunities in the developing world.",
    "website": "https://pencilsofpromise.org/",
    "keywords": [
      "education",
      "schools",
      "children",
      "global",
      "development"
    ]
  },
  {
    "name": "The Brain Tumor Charity",
    "description": "Funds research for brain tumors and supports patients and survivors.",
    "website": "https://www.thebraintumourcharity.org/about-us/",
    "keywords": [
      "brain",
      "cancer",
      "research",
      "health",
      "support"
    ]
  },
  {
    "name": "Feeding America",
    "description": "National network of food banks working to fight hunger in the United States.",
    "website": "https://www.feedingamerica.org",
    "keywords": [
      "hunger",
      "food",
      "america",
      "relief",
      "meals"
    ]
  },
  {
    "name": "Doctors Without Borders",
    "description": "Provides medical care to people affected by conflict, epidemics, disasters, or exclusion from healthcare.",
    "website": "https://www.doctorswithoutborders.org",
    "keywords": [
      "healthcare",
      "medical",
      "disasters",
      "global",
      "emergency"
    ]
  },
  {
    "name": "World Wildlife Fund",
    "description": "Dedicated to the conservation of nature and the protection of wildlife.",
    "website": "https://www.worldwildlife.org",
    "keywords": [
      "wildlife",
      "conservation",
      "nature",
      "environment",
      "animals"
    ]
  },
  {
    "name": "The Salvation Army",
    "description": "Provides social services, disaster relief, and assistance for people in need.",
    "website": "https://www.salvationarmyusa.org",
    "keywords": [
      "help",
      "disaster",
      "emergency",
      "relief",
      "community"
    ]
  },
  {
    "name": "United Nations Children's Fund (UNICEF)",
    "description": "Works to improve the lives of children around the world by providing emergency relief, education, and nutrition.",
    "website": "https://www.unicef.org",
    "keywords": [
      "children",
      "education",
      "emergency",
      "global",
      "nutrition"
    ]
  },
  {
    "name": "Habitat for Humanity",
    "description": "Helps build homes and communities for people in need of safe and affordable housing.",
    "website": "https://www.habitat.org",
    "keywords": [
      "housing",
      "community",
      "construction",
      "home",
      "affordable"
    ]
  },
  {
    "name": "The Nature Conservancy",
    "description": "Works to protect the lands and waters on which all life depends.",
    "website": "https://www.nature.org",
    "keywords": [
      "nature",
      "conservation",
      "environment",
      "land",
      "water"
    ]
  },
  {
    "name": "Oxfam",
    "description": "A global movement working to end poverty, inequality, and injustice.",
    "website": "https://www.oxfam.org",
    "keywords": [
      "poverty",
      "equality",
      "justice",
      "global",
      "relief"
    ]
  },
  {
    "name": "Save the Children",
    "description": "Provides children in need with education, health care, and emergency relief.",
    "website": "https://www.savethechildren.org",
    "keywords": [
      "children",
      "education",
      "health",
      "emergency",
      "global"
    ]
  },
  {
    "name": "Make-A-Wish Foundation",
    "description": "Grants the wishes of children with life-threatening medical conditions.",
    "website": "https://www.wish.org",
    "keywords": [
      "children",
      "wish",
      "disease",
      "cancer",
      "hope"
    ]
  },
  {
    "name": "National Public Radio (NPR)",
    "description": "Provides news, music, and cultural programming across the U.S.",
    "website": "https://www.npr.org",
    "keywords": [
      "media",
      "radio",
      "news",
      "culture",
      "public"
    ]
  },
  {
    "name": "The Humane Society of the United States",
    "description": "Works to prevent animal cruelty and promote animal welfare.",
    "website": "https://www.humanesociety.org",
    "keywords": [
      "animal",
      "welfare",
      "cruelty",
      "protection",
      "rescue"
    ]
  },
  {
    "name": "American Cancer Society",
    "description": "Fights cancer through research, advocacy, and patient support.",
    "website": "https://www.cancer.org",
    "keywords": [
      "cancer",
      "research",
      "health",
      "support",
      "advocacy"
    ]
  },
  {
    "name": "World Food Programme",
    "description": "The food assistance branch of the United Nations. It provides food aid to people in crisis.",
    "website": "https://www.wfp.org",
    "keywords": [
      "hunger",
      "food",
      "aid",
      "global",
      "emergency"
    ]
  },
  {
    "name": "GlobalGiving",
    "description": "Connects nonprofits, donors, and companies to help communities thrive.",
    "website": "https://www.globalgiving.org",
    "keywords": [
      "donate",
      "global",
      "community",
      "support",
      "nonprofit"
    ]
  },
  {
    "name": "National Audubon Society",
    "description": "Works to protect birds and their habitats throughout the Americas.",
    "website": "https://www.audubon.org",
    "keywords": [
      "birds",
      "nature",
      "conservation",
      "environment",
      "wildlife"
    ]
  },
  {
    "name": "International Rescue Committee",
    "description": "Provides aid and services to refugees and displaced people.",
    "website": "https://www.rescue.org",
    "keywords": [
      "refugees",
      "displacement",
      "relief",
      "emergency",
      "global"
    ]
  },
  {
    "name": "Alzheimer's Association",
    "description": "Leads the fight to end Alzheimer's and all other dementia.",
    "website": "https://www.alz.org",
    "keywords": [
      "Alzheimer's",
      "dementia",
      "health",
      "research",
      "support"
    ]
  },
  {
    "name": "The Carter Center",
    "description": "Advances human rights and alleviates human suffering.",
    "website": "https://www.cartercenter.org",
    "keywords": [
      "human rights",
      "suffering",
      "health",
      "global",
      "advocacy"
    ]
  },
  {
    "name": "Autism Speaks",
    "description": "Advocates for people with autism and their families.",
    "website": "https://www.autismspeaks.org",
    "keywords": [
      "autism",
      "advocacy",
      "families",
      "health",
      "support"
    ]
  },
  {
    "name": "Wounded Warrior Project",
    "description": "Provides services to veterans who have incurred physical or mental injuries.",
    "website": "https://www.woundedwarriorproject.org",
    "keywords": [
      "veterans",
      "injuries",
      "support",
      "mental health",
      "care"
    ]
  },
  {
    "name": "Lupus Foundation of America",
    "description": "Fights lupus through research, education, and support for patients.",
    "website": "https://www.lupus.org",
    "keywords": [
      "lupus",
      "health",
      "research",
      "patients",
      "support"
    ]
  },
  {
    "name": "The American Diabetes Association",
    "description": "Prevents and cures diabetes and improves the lives of those affected by diabetes.",
    "website": "https://www.diabetes.org",
    "keywords": [
      "diabetes",
      "health",
      "research",
      "cure",
      "prevention"
    ]
  },
  {
    "name": "American Heart Association",
    "description": "Works to reduce the risk of heart disease and stroke.",
    "website": "https://www.heart.org",
    "keywords": [
      "heart",
      "health",
      "disease",
      "stroke",
      "prevention"
    ]
  },
  {
    "name": "Covenant House",
    "description": "Provides shelter, food, and services for homeless youth.",
    "website": "https://www.covenanthouse.org",
    "keywords": [
      "homelessness",
      "youth",
      "shelter",
      "food",
      "services"
    ]
  },
  {
    "name": "Kiva",
    "description": "A micro-lending platform that allows people to lend money to entrepreneurs in developing countries.",
    "website": "https://www.kiva.org",
    "keywords": [
      "loans",
      "entrepreneurship",
      "development",
      "global",
      "microfinance"
    ]
  },
  {
    "name": "Lions Clubs International",
    "description": "Provides humanitarian services, promotes peace, and supports community development.",
    "website": "https://www.lionsclubs.org",
    "keywords": [
      "humanitarian",
      "community",
      "peace",
      "development",
      "service"
    ]
  },
  {
    "name": "Operation Smile",
    "description": "Provides free reconstructive surgery to children with cleft lips and palates.",
    "website": "https://www.operationsmile.org",
    "keywords": [
      "children",
      "surgery",
      "health",
      "global",
      "cleft lip"
    ]
  },
  {
    "name": "United Way",
    "description": "Works to improve lives by mobilizing the caring power of communities.",
    "website": "https://www.unitedway.org",
    "keywords": [
      "community",
      "donation",
      "volunteers",
      "improve lives",
      "support"
    ]
  },
  {
    "name": "Global Fund for Women",
    "description": "Advances gender equality and the empowerment of women.",
    "website": "https://www.globalfundforwomen.org",
    "keywords": [
      "gender",
      "women",
      "equality",
      "empowerment",
      "advocacy"
    ]
  },
  {
    "name": "Heifer International",
    "description": "Works to end hunger and poverty through sustainable agriculture.",
    "website": "https://www.heifer.org",
    "keywords": [
      "hunger",
      "poverty",
      "agriculture",
      "sustainability",
      "end hunger"
    ]
  },
  {
    "name": "The American Civil Liberties Union",
    "description": "Defends and preserves individual rights and liberties guaranteed by the Constitution.",
    "website": "https://www.aclu.org",
    "keywords": [
      "civil rights",
      "liberties",
      "defense",
      "advocacy",
      "justice"
    ]
  },
  {
    "name": "Teach for America",
    "description": "Expands educational opportunities for children in underserved communities.",
    "website": "https://www.teachforamerica.org",
    "keywords": [
      "education",
      "children",
      "teaching",
      "community",
      "opportunities"
    ]
  },
  {
    "name": "Water.org",
    "description": "Provides access to safe water and sanitation for millions in developing countries.",
    "website": "https://www.water.org",
    "keywords": [
      "water",
      "sanitation",
      "global",
      "health",
      "access"
    ]
  },
  {
    "name": "St. Jude Children's Research Hospital",
    "description": "Researches and treats childhood cancer and other life-threatening diseases.",
    "website": "https://www.stjude.org",
    "keywords": [
      "children",
      "cancer",
      "research",
      "treatment",
      "health"
    ]
  },
  {
    "name": "Goodwill Industries International",
    "description": "Empowers individuals and families through education, job training, and employment services.",
    "website": "https://www.goodwill.org",
    "keywords": [
      "employment",
      "education",
      "job training",
      "empowerment",
      "community"
    ]
  },
  {
    "name": "National Geographic Society",
    "description": "Supports exploration and education, focusing on the planet's greatest challenges.",
    "website": "https://www.nationalgeographic.org",
    "keywords": [
      "exploration",
      "education",
      "environment",
      "planet",
      "science"
    ]
  },
  {
    "name": "Oceana",
    "description": "Works to protect and restore the oceans on a global scale.",
    "website": "https://www.oceana.org",
    "keywords": [
      "ocean",
      "environment",
      "conservation",
      "marine life",
      "oceans"
    ]
  },
  {
    "name": "Rotary International",
    "description": "Works to solve global issues through community service and volunteerism.",
    "website": "https://www.rotary.org",
    "keywords": [
      "community",
      "service",
      "volunteer",
      "global",
      "peace"
    ]
  },
  {
    "name": "ChildFund International",
    "description": "Helps children and families in need through child sponsorship programs.",
    "website": "https://www.childfund.org",
    "keywords": [
      "children",
      "sponsorship",
      "health",
      "education",
      "global"
    ]
  },
  {
    "name": "UNICEF USA",
    "description": "Provides life-saving programs to children in need worldwide.",
    "website": "https://www.unicefusa.org",
    "keywords": [
      "children",
      "education",
      "health",
      "emergency",
      "nutrition"
    ]
  },
  {
    "name": "Action Against Hunger",
    "description": "Dedicated to ending world hunger through innovative, sustainable solutions.",
    "website": "https://www.actionagainsthunger.org",
    "keywords": [
      "hunger",
      "malnutrition",
      "water",
      "nutrition",
      "relief"
    ]
  },
  {
    "name": "Amnesty International",
    "description": "Fights for human rights and justice worldwide.",
    "website": "https://www.amnesty.org",
    "keywords": [
      "human rights",
      "justice",
      "advocacy",
      "global",
      "peace"
    ]
  },
  {
    "name": "Clean Water Action",
    "description": "Works to ensure everyone has access to clean water and a healthy environment.",
    "website": "https://www.cleanwateraction.org",
    "keywords": [
      "water",
      "environment",
      "health",
      "conservation",
      "clean"
    ]
  },
  {
    "name": "Project HOPE",
    "description": "Places power in the hands of local health workers to save lives and transform health.",
    "website": "https://www.projecthope.org",
    "keywords": [
      "health",
      "workers",
      "global",
      "training",
      "medicine"
    ]
  },
  {
    "name": "Mercy Corps",
    "description": "Helps communities in crisis recover and build a better future.",
    "website": "https://www.mercycorps.org",
    "keywords": [
      "crisis",
      "community",
      "global",
      "relief",
      "development"
    ]
  },
  {
    "name": "Special Olympics",
    "description": "Provides year-round sports training and athletic competition for children and adults with intellectual disabilities.",
    "website": "https://www.specialolympics.org",
    "keywords": [
      "sports",
      "disabilities",
      "inclusion",
      "children",
      "competition"
    ]
  },
  {
    "name": "National Alliance on Mental Illness (NAMI)",
    "description": "Provides advocacy, education, support, and public awareness for people with mental illnesses and their families.",
    "website": "https://www.nami.org",
    "keywords": [
      "mental health",
      "advocacy",
      "education",
      "support",
      "illness"
    ]
  },
  {
    "name": "World Vision",
    "description": "A Christian humanitarian organization dedicated to working with children, families, and communities to overcome poverty and injustice.",
    "website": "https://www.worldvision.org",
    "keywords": [
      "poverty",
      "children",
      "humanitarian",
      "development",
      "Christian"
    ]
  },
  {
    "name": "Susan G. Komen",
    "description": "Fights breast cancer through research, community health, global outreach, and public policy initiatives.",
    "website": "https://www.komen.org",
    "keywords": [
      "breast cancer",
      "research",
      "health",
      "support",
      "advocacy"
    ]
  },
  {
    "name": "The American Foundation for Suicide Prevention",
    "description": "Funds research, creates educational programs, advocates for public policy, and supports those affected by suicide.",
    "website": "https://www.afsp.org",
    "keywords": [
      "suicide",
      "prevention",
      "mental health",
      "research",
      "support"
    ]
  },
  {
    "name": "Shriners Hospitals for Children",
    "description": "Provides specialized medical care to children with orthopedic conditions, burns, spinal cord injuries, and cleft lip and palate.",
    "website": "https://www.shrinershospitalsforchildren.org",
    "keywords": [
      "children",
      "medical care",
      "hospitals",
      "orthopedic",
      "burns"
    ]
  },
  {
    "name": "Ronald McDonald House Charities",
    "description": "Creates, finds, and supports programs that directly improve the health and well-being of children and their families.",
    "website": "https://www.rmhc.org",
    "keywords": [
      "children",
      "families",
      "health",
      "hospitals",
      "housing"
    ]
  },
  {
    "name": "Best Friends Animal Society",
    "description": "Works to save the lives of cats and dogs in America's shelters.",
    "website": "https://www.bestfriends.org",
    "keywords": [
      "animals",
      "shelter",
      "rescue",
      "pets",
      "welfare"
    ]
  },
  {
    "name": "Environmental Defense Fund",
    "description": "Finds practical, science-based solutions to the most urgent environmental problems.",
    "website": "https://www.edf.org",
    "keywords": [
      "environment",
      "climate",
      "science",
      "conservation",
      "pollution"
    ]
  },
  {
    "name": "Sierra Club Foundation",
    "description": "Funds charitable programs that work to protect our planet for future generations.",
    "website": "https://www.sierraclubfoundation.org",
    "keywords": [
      "environment",
      "conservation",
      "climate",
      "advocacy",
      "wilderness"
    ]
  },
  {
    "name": "Greenpeace Fund",
    "description": "Investigates and exposes environmental abuses and works to create solutions.",
    "website": "https://www.greenpeacefund.org",
    "keywords": [
      "environment",
      "activism",
      "climate",
      "oceans",
      "deforestation"
    ]
  },
  {
    "name": "Charity: Water",
    "description": "Brings clean and safe drinking water to people in developing nations.",
    "website": "https://www.charitywater.org",
    "keywords": [
      "water",
      "sanitation",
      "global",
      "clean water",
      "health"
    ]
  },
  {
    "name": "The Hunger Project",
    "description": "A global non-profit organization committed to the sustainable end of world hunger.",
    "website": "https://www.thp.org",
    "keywords": [
      "hunger",
      "poverty",
      "sustainability",
      "global",
      "development"
    ]
  },
  {
    "name": "Catholic Charities USA",
    "description": "Provides a wide range of social services to people in need, regardless of their religious, social, or economic backgrounds.",
    "website": "https://www.catholiccharitiesusa.org",
    "keywords": [
      "social services",
      "community",
      "poverty",
      "charity",
      "Catholic"
    ]
  },
  {
    "name": "Habitat for Humanity International",
    "description": "Partners with families to build and improve places to call home.",
    "website": "https://www.habitat.org",
    "keywords": [
      "housing",
      "community",
      "construction",
      "home",
      "volunteers"
    ]
  },
  {
    "name": "World Health Organization (WHO)",
    "description": "Works worldwide to promote health, keep the world safe, and serve the vulnerable.",
    "website": "https://www.who.int",
    "keywords": [
      "health",
      "global",
      "disease",
      "medicine",
      "safety"
    ]
  },
  {
    "name": "The American Foundation for the Blind",
    "description": "Works to create a world of no limits for people who are blind or visually impaired.",
    "website": "https://www.afb.org",
    "keywords": [
      "blindness",
      "disability",
      "advocacy",
      "support",
      "vision"
    ]
  },
  {
    "name": "Partners In Health",
    "description": "Works to bring the benefits of modern medical science to the most vulnerable communities.",
    "website": "https://www.pih.org",
    "keywords": [
      "health",
      "medicine",
      "global",
      "community",
      "vulnerable"
    ]
  },
  {
    "name": "United Negro College Fund (UNCF)",
    "description": "Supports minority students with scholarships and provides financial support to historically Black colleges and universities.",
    "website": "https://www.uncf.org",
    "keywords": [
      "education",
      "scholarships",
      "minority",
      "colleges",
      "HBCU"
    ]
  },
  {
    "name": "The Innocence Project",
    "description": "Exonerates the wrongly convicted through DNA testing and reforms the criminal justice system.",
    "website": "https://www.innocenceproject.org",
    "keywords": [
      "justice",
      "legal",
      "DNA",
      "wrongful conviction",
      "reform"
    ]
  },
  {
    "name": "Boys & Girls Clubs of America",
    "description": "Provides a safe place for children and teens to learn and grow, with a focus on education, healthy lifestyles, and good character.",
    "website": "https://www.bgca.org",
    "keywords": [
      "youth",
      "education",
      "children",
      "mentoring",
      "community"
    ]
  },
  {
    "name": "National Wildlife Federation",
    "description": "Unites all Americans to ensure wildlife thrive in a rapidly changing world.",
    "website": "https://www.nwf.org",
    "keywords": [
      "wildlife",
      "conservation",
      "environment",
      "animals",
      "habitat"
    ]
  },
  {
    "name": "American Civil Liberties Union (ACLU)",
    "description": "Works to defend and preserve the individual rights and liberties guaranteed by the Constitution and laws of the United States.",
    "website": "https://www.aclu.org",
    "keywords": [
      "civil rights",
      "liberties",
      "justice",
      "advocacy",
      "legal"
    ]
  },
  {
    "name": "American Diabetes Association",
    "description": "Prevents and cures diabetes and improves the lives of all people affected by diabetes.",
    "website": "https://www.diabetes.org",
    "keywords": [
      "diabetes",
      "health",
      "research",
      "prevention",
      "cure"
    ]
  },
  {
    "name": "Planned Parenthood Federation of America",
    "description": "Provides reproductive health care, sex education, and information to millions of women, men, and young people worldwide.",
    "website": "https://www.plannedparenthood.org",
    "keywords": [
      "reproductive health",
      "healthcare",
      "education",
      "women",
      "family planning"
    ]
  },
  {
    "name": "The Arc",
    "description": "Advocates for and serves people with intellectual and developmental disabilities.",
    "website": "https://www.thearc.org",
    "keywords": [
      "disability",
      "advocacy",
      "intellectual",
      "developmental",
      "support"
    ]
  },
  {
    "name": "Movember Foundation",
    "description": "Raises awareness and funds for men's health issues, including prostate cancer, testicular cancer, and suicide prevention.",
    "website": "https://www.movember.com",
    "keywords": [
      "men's health",
      "cancer",
      "suicide",
      "awareness",
      "prostate"
    ]
  },
  {
    "name": "The Ocean Cleanup",
    "description": "Develops advanced technologies to rid the world’s oceans of plastic.",
    "website": "https://www.theoceancleanup.com",
    "keywords": [
      "ocean",
      "pollution",
      "plastic",
      "technology",
      "environment"
    ]
  },
  {
    "name": "Humane Society International",
    "description": "Fights animal cruelty and promotes animal welfare around the globe.",
    "website": "https://www.hsi.org",
    "keywords": [
      "animals",
      "cruelty",
      "welfare",
      "global",
      "rescue"
    ]
  },
  {
    "name": "Médecins Sans Frontières",
    "description": "Provides independent medical humanitarian assistance to people in need.",
    "website": "https://www.msf.org",
    "keywords": [
      "medical",
      "humanitarian",
      "health",
      "crisis",
      "aid"
    ]
  },
  {
    "name": "Care International",
    "description": "Works around the globe to save lives, defeat poverty, and achieve social justice.",
    "website": "https://www.care.org",
    "keywords": [
      "poverty",
      "justice",
      "development",
      "relief",
      "women"
    ]
  },
  {
    "name": "Boys Town",
    "description": "Provides a range of services to help children and families, including residential care, foster care, and in-home family services.",
    "website": "https://www.boystown.org",
    "keywords": [
      "children",
      "families",
      "foster care",
      "youth",
      "support"
    ]
  },
  {
    "name": "The Michael J. Fox Foundation for Parkinson's Research",
    "description": "Dedicated to finding a cure for Parkinson's disease through an aggressively funded research agenda.",
    "website": "https://www.michaeljfox.org",
    "keywords": [
      "Parkinson's",
      "research",
      "cure",
      "neurology",
      "health"
    ]
  },
  {
    "name": "The American Cancer Society",
    "description": "Funds cancer research and provides information and support to people with cancer.",
    "website": "https://www.cancer.org",
    "keywords": [
      "cancer",
      "research",
      "health",
      "support",
      "advocacy"
    ]
  },
  {
    "name": "The American Red Cross",
    "description": "Provides emergency assistance, disaster relief, and disaster preparedness education.",
    "website": "https://www.redcross.org",
    "keywords": [
      "blood",
      "disaster",
      "relief",
      "emergency",
      "donate"
    ]
  },
  {
    "name": "Cystic Fibrosis Foundation",
    "description": "A non-profit organization that funds research, provides education, and supports care for people with cystic fibrosis.",
    "website": "https://www.cff.org",
    "keywords": [
      "cystic fibrosis",
      "health",
      "research",
      "respiratory",
      "genetics"
    ]
  },
  {
    "name": "March of Dimes",
    "description": "Works to improve the health of mothers and babies by preventing birth defects, premature birth, and infant mortality.",
    "website": "https://www.marchofdimes.org",
    "keywords": [
      "babies",
      "mothers",
      "health",
      "birth",
      "research"
    ]
  },
  {
    "name": "The Parkinson's Foundation",
    "description": "Provides education and resources to improve the lives of people with Parkinson's and their families.",
    "website": "https://www.parkinson.org",
    "keywords": [
      "Parkinson's",
      "disease",
      "health",
      "support",
      "education"
    ]
  },
  {
    "name": "Juvenile Diabetes Research Foundation (JDRF)",
    "description": "Funds type 1 diabetes research to accelerate life-changing breakthroughs to cure, prevent, and treat the disease.",
    "website": "https://www.jdrf.org",
    "keywords": [
      "diabetes",
      "type 1",
      "research",
      "cure",
      "health"
    ]
  },
  {
    "name": "The Leukemia & Lymphoma Society",
    "description": "Dedicated to funding blood cancer research and providing education and patient services.",
    "website": "https://www.lls.org",
    "keywords": [
      "leukemia",
      "lymphoma",
      "cancer",
      "research",
      "blood"
    ]
  },
  {
    "name": "The National Multiple Sclerosis Society",
    "description": "Dedicated to mobilizing people and resources to drive research for a cure for MS.",
    "website": "https://www.nationalmssociety.org",
    "keywords": [
      "multiple sclerosis",
      "MS",
      "research",
      "health",
      "neurology"
    ]
  },
  {
    "name": "The ALS Association",
    "description": "A national nonprofit organization that funds research, provides care services, and advocates for public policy for people with ALS.",
    "website": "https://www.alsa.org",
    "keywords": [
      "ALS",
      "neurology",
      "research",
      "health",
      "care"
    ]
  },
  {
    "name": "The Epilepsy Foundation",
    "description": "Works to stop seizures and sudden unexpected death in epilepsy (SUDEP), find a cure, and overcome the challenges created by epilepsy.",
    "website": "https://www.epilepsy.com",
    "keywords": [
      "epilepsy",
      "seizures",
      "health",
      "neurology",
      "support"
    ]
  },
  {
    "name": "The Brain & Behavior Research Foundation",
    "description": "Funds innovative research to better understand, treat, and prevent mental illness.",
    "website": "https://www.bbrfoundation.org",
    "keywords": [
      "mental health",
      "research",
      "brain",
      "illness",
      "neuroscience"
    ]
  },
  {
    "name": "The Alzheimer's Drug Discovery Foundation",
    "description": "Funds drug discovery research to prevent, treat, and cure Alzheimer's disease.",
    "website": "https://www.alzdiscovery.org",
    "keywords": [
      "Alzheimer's",
      "research",
      "drug discovery",
      "dementia",
      "health"
    ]
  },
  {
    "name": "Cure Alzheimer's Fund",
    "description": "A non-profit organization dedicated to funding research for a cure for Alzheimer's disease.",
    "website": "https://www.curealz.org",
    "keywords": [
      "Alzheimer's",
      "research",
      "cure",
      "neuroscience",
      "dementia"
    ]
  },
  {
    "name": "The American Brain Tumor Association",
    "description": "Works to advance the understanding and treatment of brain tumors with a commitment to improving the lives of those impacted.",
    "website": "https://www.abta.org",
    "keywords": [
      "brain tumor",
      "cancer",
      "research",
      "health",
      "treatment"
    ]
  },
  {
    "name": "St. Baldrick's Foundation",
    "description": "Funds research to find cures for childhood cancers.",
    "website": "https://www.stbaldricks.org",
    "keywords": [
      "childhood cancer",
      "research",
      "children",
      "cancer",
      "cure"
    ]
  },
  {
    "name": "Alex's Lemonade Stand Foundation",
    "description": "Fights childhood cancer through funding research, raising awareness, and supporting families.",
    "website": "https://www.alexslemonade.org",
    "keywords": [
      "childhood cancer",
      "research",
      "children",
      "families",
      "support"
    ]
  },
  {
    "name": "The Breast Cancer Research Foundation",
    "description": "A non-profit organization committed to preventing and curing breast cancer by advancing the world's most promising research.",
    "website": "https://www.bcrf.org",
    "keywords": [
      "breast cancer",
      "research",
      "cure",
      "prevention",
      "health"
    ]
  },
  {
    "name": "The Multiple Myeloma Research Foundation",
    "description": "Works to accelerate the development of new treatments and to find a cure for multiple myeloma.",
    "website": "https://www.themmrf.org",
    "keywords": [
      "multiple myeloma",
      "cancer",
      "research",
      "treatment",
      "cure"
    ]
  },
  {
    "name": "The Colorectal Cancer Alliance",
    "description": "Works to screen, care, and cure for people with colorectal cancer.",
    "website": "https://www.ccalliance.org",
    "keywords": [
      "colorectal cancer",
      "cancer",
      "research",
      "screening",
      "support"
    ]
  },
  {
    "name": "The Pancreatic Cancer Action Network (PanCAN)",
    "description": "Fights pancreatic cancer by funding research, providing patient services, and advocating for more government funding.",
    "website": "https://www.pancan.org",
    "keywords": [
      "pancreatic cancer",
      "cancer",
      "research",
      "advocacy",
      "patient support"
    ]
  },
  {
    "name": "Stand Up To Cancer",
    "description": "Funds and develops the newest, most promising cancer treatments to get them to patients quickly.",
    "website": "https://www.standuptocancer.org",
    "keywords": [
      "cancer",
      "research",
      "treatment",
      "patients",
      "cure"
    ]
  },
  {
    "name": "The Lung Cancer Research Foundation",
    "description": "Dedicated to improving lung cancer outcomes by funding research for the prevention, diagnosis, treatment and cure.",
    "website": "https://www.lungcancerresearchfoundation.org",
    "keywords": [
      "lung cancer",
      "cancer",
      "research",
      "treatment",
      "cure"
    ]
  },
  {
    "name": "The National Kidney Foundation",
    "description": "Provides support and education to kidney patients, and funds research to prevent and treat kidney disease.",
    "website": "https://www.kidney.org",
    "keywords": [
      "kidney disease",
      "health",
      "research",
      "patients",
      "prevention"
    ]
  },
  {
    "name": "The National Psoriasis Foundation",
    "description": "Drives efforts to cure psoriatic disease and improve the lives of those affected.",
    "website": "https://www.psoriasis.org",
    "keywords": [
      "psoriasis",
      "skin disease",
      "health",
      "research",
      "cure"
    ]
  },
  {
    "name": "The Scleroderma Foundation",
    "description": "Provides support, education, and research for people with scleroderma.",
    "website": "https://www.scleroderma.org",
    "keywords": [
      "scleroderma",
      "health",
      "autoimmune",
      "research",
      "support"
    ]
  },
  {
    "name": "The Crohn's & Colitis Foundation",
    "description": "Funds inflammatory bowel disease research and provides support and education for patients and their families.",
    "website": "https://www.crohnscolitisfoundation.org",
    "keywords": [
      "Crohn's",
      "colitis",
      "IBD",
      "research",
      "digestive health"
    ]
  },
  {
    "name": "The American Lung Association",
    "description": "Fights for healthy lungs and air by funding research, educating the public, and advocating for lung health.",
    "website": "https://www.lung.org",
    "keywords": [
      "lungs",
      "health",
      "air quality",
      "research",
      "advocacy"
    ]
  },
  {
    "name": "The American Liver Foundation",
    "description": "Promotes liver wellness, education, and research.",
    "website": "https://www.liverfoundation.org",
    "keywords": [
      "liver",
      "health",
      "disease",
      "research",
      "wellness"
    ]
  },
  {
    "name": "The American Foundation for AIDS Research (amfAR)",
    "description": "Dedicated to ending the global AIDS epidemic through innovative research.",
    "website": "https://www.amfar.org",
    "keywords": [
      "AIDS",
      "HIV",
      "research",
      "epidemic",
      "health"
    ]
  },
  {
    "name": "The Elizabeth Glaser Pediatric AIDS Foundation",
    "description": "Dedicated to preventing pediatric HIV infection and eliminating pediatric AIDS through research, advocacy, and prevention.",
    "website": "https://www.pedaids.org",
    "keywords": [
      "AIDS",
      "pediatric",
      "HIV",
      "children",
      "research"
    ]
  },
  {
    "name": "The Cystic Fibrosis Foundation",
    "description": "A non-profit organization that funds research, provides education, and supports care for people with cystic fibrosis.",
    "website": "https://www.cff.org",
    "keywords": [
      "cystic fibrosis",
      "health",
      "research",
      "respiratory",
      "genetics"
    ]
  },
  {
    "name": "The National Down Syndrome Society",
    "description": "Provides support and advocacy for individuals with Down syndrome and their families.",
    "website": "https://www.ndss.org",
    "keywords": [
      "Down syndrome",
      "disability",
      "advocacy",
      "support",
      "education"
    ]
  },
  {
    "name": "The Fragile X Association",
    "description": "Supports individuals and families affected by Fragile X syndrome through advocacy and education.",
    "website": "https://www.fragilex.org",
    "keywords": [
      "Fragile X",
      "genetics",
      "disability",
      "advocacy",
      "support"
    ]
  },
  {
    "name": "The American Migraine Foundation",
    "description": "Works to improve the lives of people with migraine and other headache disorders.",
    "website": "https://www.migrainefoundation.org",
    "keywords": [
      "migraine",
      "headache",
      "health",
      "neurology",
      "support"
    ]
  },
  {
    "name": "National Down Syndrome Society",
    "description": "Provides support and advocacy for individuals with Down syndrome and their families.",
    "website": "https://www.ndss.org",
    "keywords": [
      "Down syndrome",
      "disability",
      "advocacy",
      "support",
      "education"
    ]
  },
  {
    "name": "NPower",
    "description": "Provides underserved young adults and military veterans with free IT training, professional certifications, and job placement support to build careers in tech.",
    "image": "https://www.npower.org/wp-content/uploads/2019/10/NPower-logo.png",
    "website": "https://www.npower.org/"
  },
  {
    "name": "Code.org",
    "description": "Expands access to computer science education in K–12 schools, with an emphasis on increasing participation by young women and students from underrepresented groups.",
    "image": "https://code.org/images/social-media/codeorg2021.jpg",
    "website": "https://code.org/"
  },
  {
    "name": "Girls Who Code",
    "description": "Works to close the gender gap in technology by offering clubs, summer programs, and college-level support for girls interested in coding and computer science.",
    "image": "https://girlswhocode.com/assets/images/gwc-logo.svg",
    "website": "https://girlswhocode.com/"
  },
  {
    "name": "Black Girls Code",
    "description": "Empowers young Black girls by providing workshops and programs in programming, robotics, and game development to cultivate future leaders in tech.",
    "image": "https://www.blackgirlscode.com/uploads/1/2/0/6/120685453/bgc-logo-color_orig.png",
    "website": "https://www.blackgirlscode.com/"
  },
  {
    "name": "Hack the Hood",
    "description": "Trains low-income youth of color in web development and digital marketing to prepare them for tech careers and entrepreneurship.",
    "image": "https://www.hackthehood.org/uploads/1/2/2/7/122700268/published/ht-logo-png_2.png",
    "website": "https://www.hackthehood.org/"
  },
  {
    "name": "The Hidden Genius Project",
    "description": "Mentors Black male youth in technology creation, entrepreneurship, and leadership to transform their lives and communities.",
    "image": "https://www.hiddengeniusproject.org/wp-content/uploads/2019/10/logo.png",
    "website": "https://www.hiddengeniusproject.org/"
  },
  {
    "name": "Genesys Works",
    "description": "Connects high school students from underserved communities to paid internships and IT training in professional environments.",
    "image": "https://www.genesysworks.org/wp-content/uploads/2020/01/GW-HorzLogo-RGB.png",
    "website": "https://www.genesysworks.org/"
  },
  {
    "name": "TechGirlz",
    "description": "Inspires middle school girls to explore technology through free hands-on workshops and educational resources.",
    "image": "https://www.techgirlz.org/wp-content/uploads/2019/06/TechGirlzLogo-Large-1.png",
    "website": "https://www.techgirlz.org/"
  },
  {
    "name": "CodePath.org",
    "description": "Provides college students with free courses in computer science, mentorship, and career support to break into the tech industry.",
    "image": "https://codepath.org/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75",
    "website": "https://codepath.org/"
  },
  {
    "name": "American Telemedicine Association",
    "description": "Promotes the use of advanced telehealth technologies to improve access to quality healthcare services.",
    "image": "https://www.americantelemed.org/wp-content/uploads/2020/05/ATA_logo_transparent.png",
    "website": "https://www.americantelemed.org/"
  },
  {
    "name": "Per Scholas",
    "description": "Offers free, rigorous IT job training to individuals in underserved communities, helping them launch successful careers in technology.",
    "image": "https://perscholas.org/wp-content/themes/perscholas/assets/images/logo.png",
    "website": "https://www.perscholas.org/"
  },
  {
    "name": "All Star Code",
    "description": "Prepares young men of color for careers in tech by providing mentorship, industry exposure, and intensive coding training.",
    "image": "https://allstarcode.org/wp-content/uploads/2021/05/logo.png",
    "website": "https://allstarcode.org/"
  },
  {
    "name": "Digital NEST",
    "description": "Provides youth in underserved rural communities with access to technology, mentorship, and skills to pursue tech careers.",
    "image": "https://digitalnest.org/wp-content/uploads/2020/10/digital-nest-logo.svg",
    "website": "https://digitalnest.org/"
  },
  {
    "name": "Resilient Coders",
    "description": "Teaches young people from underserved communities how to code and supports them into high-growth tech jobs.",
    "image": "https://resilientcoders.org/images/logo-black.png",
    "website": "https://resilientcoders.org/"
  },
  {
    "name": "CareerFoundry Scholarships",
    "description": "Provides scholarships and bootcamp programs to help diverse and low-income students transition into tech careers.",
    "image": "https://careerfoundry.com/assets/logos/logo-black.svg",
    "website": "https://careerfoundry.com/"
  },
  {
    "name": "StackUp",
    "description": "Supports veterans and active duty military through gaming-based mental health programs and tech industry exposure.",
    "image": "https://stackup.org/wp-content/uploads/2020/11/stack-up-logo-red.png",
    "website": "https://stackup.org/"
  },
  {
    "name": "OpenDoors Academy",
    "description": "Supports middle and high school students in under-resourced communities through education and career readiness programs, including tech skills.",
    "image": "https://www.opendoorsacademy.org/wp-content/uploads/2020/10/ODA-Logo.png",
    "website": "https://www.opendoorsacademy.org/"
  },
  {
    "name": "Internet Society Foundation",
    "description": "Funds programs that expand internet access and digital education to underserved and rural communities.",
    "image": "https://www.isocfoundation.org/wp-content/uploads/2020/03/ISOC-Foundation-Logo-1.svg",
    "website": "https://www.isocfoundation.org/"
  },
  {
    "name": "NextGen America",
    "description": "Empowers young people through civic engagement and access to education, including digital literacy and tech equity initiatives.",
    "image": "https://nextgenamerica.org/wp-content/themes/nextgen/assets/images/logo.svg",
    "website": "https://nextgenamerica.org/"
  },
  {
    "name": "The Tech Interactive",
    "description": "A science and technology center offering hands-on education, innovation programs, and outreach for students from underrepresented communities.",
    "image": "https://www.thetech.org/sites/default/files/logo.png",
    "website": "https://www.thetech.org/"
  },
  {
    "name": "LAUNCH Code",
    "description": "Offers free coding education and job placement services to help adults from nontraditional backgrounds start careers in tech.",
    "image": "https://www.launchcode.org/static/media/logo.1cc84556.svg",
    "website": "https://www.launchcode.org/"
  },
  {
    "name": "Bay Area Video Coalition (BAVC)",
    "description": "Provides low-cost media and tech training, job support, and apprenticeships to help underserved communities thrive in digital industries.",
    "image": "https://bavc.org/wp-content/uploads/2023/01/bavc-logo.png",
    "website": "https://bavc.org/"
  },
  {
    "name": "Health Career Connection",
    "description": "Expands diversity in health professions by offering paid internships and career development for college students in underrepresented communities.",
    "image": "https://healthcareers.org/wp-content/uploads/2020/10/HCC_logo_color.png",
    "website": "https://healthcareers.org/"
  },
  {
    "name": "Health Leads",
    "description": "Connects low-income patients with essential resources like food, housing, and transportation to improve overall health outcomes.",
    "image": "https://healthleadsusa.org/wp-content/uploads/2022/06/Health-Leads-Logo.png",
    "website": "https://healthleadsusa.org/"
  },
  {
    "name": "National Health Foundation",
    "description": "Improves community health by addressing social determinants like education, nutrition, and housing for underserved populations.",
    "image": "https://nationalhealthfoundation.org/wp-content/uploads/2020/01/nhf-logo.svg",
    "website": "https://nationalhealthfoundation.org/"
  },
  {
    "name": "Techbridge Girls",
    "description": "Provides STEM education and mentorship to girls from low-income communities to empower their academic and career growth.",
    "image": "https://www.techbridgegirls.org/uploads/1/2/1/3/121346119/tbg-logo_orig.png",
    "website": "https://www.techbridgegirls.org/"
  },
  {
    "name": "DevMission",
    "description": "Trains young adults from underserved communities in San Francisco for careers in tech through hands-on learning and job placement.",
    "image": "https://www.devmission.org/uploads/1/0/2/3/102389226/devmissionlogo_orig.png",
    "website": "https://www.devmission.org/"
  },
  {
    "name": "MedHaul",
    "description": "A mission-driven tech platform that improves access to transportation for underserved patients needing non-emergency medical care.",
    "image": "https://www.medhaul.com/wp-content/uploads/2021/06/medhaul-logo.png",
    "website": "https://www.medhaul.com/"
  },
  {
    "name": "Cyversity",
    "description": "Promotes diversity in cybersecurity by offering training, mentorship, and scholarships for underrepresented populations.",
    "image": "https://www.cyversity.org/wp-content/uploads/2020/12/cyversity-logo.png",
    "website": "https://www.cyversity.org/"
  },
  {
    "name": "Built By Girls",
    "description": "Prepares the next generation of female and nonbinary leaders in tech through mentorship and career-readiness programs.",
    "image": "https://www.builtbygirls.com/images/logos/builtbygirls.svg",
    "website": "https://www.builtbygirls.com/"
  },
  {
    "name": "World Wildlife Fund (WWF)",
    "description": "Dedicated to the conservation of nature and the protection of wildlife.",
    "website": "https://www.worldwildlife.org",
    "keywords": [
      "wildlife",
      "conservation",
      "environment",
      "nature",
      "animals"
    ]
  },
  {
    "name": "The American Civil Liberties Union (ACLU)",
    "description": "Defends and preserves individual rights and liberties guaranteed by the Constitution.",
    "website": "https://www.aclu.org",
    "keywords": [
      "civil rights",
      "liberties",
      "defense",
      "advocacy",
      "justice"
    ]
  },
  {
    "name": "Big Brothers Big Sisters of America",
    "description": "Provides children facing adversity with strong and enduring, professionally supported one-to-one mentoring relationships.",
    "website": "https://www.bbbs.org",
    "keywords": [
      "mentoring",
      "children",
      "youth",
      "support",
      "relationships"
    ]
  },
  {
    "name": "Boy Scouts of America",
    "description": "Provides a program for young people to build character, train in the responsibilities of participating citizenship, and develop personal fitness.",
    "website": "https://www.scouting.org",
    "keywords": [
      "youth",
      "scouting",
      "leadership",
      "character",
      "citizenship"
    ]
  },
  {
    "name": "City of Hope",
    "description": "A world-renowned cancer and diabetes research and treatment center.",
    "website": "https://www.cityofhope.org",
    "keywords": [
      "cancer",
      "diabetes",
      "research",
      "health",
      "treatment"
    ]
  },
  {
    "name": "Conservation International",
    "description": "Works to protect nature for the benefit of humanity.",
    "website": "https://www.conservation.org",
    "keywords": [
      "conservation",
      "nature",
      "environment",
      "biodiversity",
      "humanity"
    ]
  },
  {
    "name": "Direct Relief",
    "description": "Provides medical aid to people affected by poverty or emergencies around the world.",
    "website": "https://www.directrelief.org",
    "keywords": [
      "medical",
      "aid",
      "poverty",
      "emergencies",
      "global"
    ]
  },
  {
    "name": "Easterseals",
    "description": "Provides services for people with disabilities and their families.",
    "website": "https://www.easterseals.com",
    "keywords": [
      "disabilities",
      "services",
      "therapy",
      "education",
      "support"
    ]
  },
  {
    "name": "Fidelity Charitable",
    "description": "A public charity that offers a donor-advised fund program to help people give to charity.",
    "website": "https://www.fidelitycharitable.org",
    "keywords": [
      "philanthropy",
      "donations",
      "charity",
      "giving",
      "fund"
    ]
  },
  {
    "name": "The Ford Foundation",
    "description": "Works to reduce poverty and injustice, strengthen democratic values, and promote international cooperation.",
    "website": "https://www.fordfoundation.org",
    "keywords": [
      "poverty",
      "justice",
      "democracy",
      "inequality",
      "social good"
    ]
  },
  {
    "name": "Girl Scouts of the USA",
    "description": "Builds girls of courage, confidence, and character, who make the world a better place.",
    "website": "https://www.girlscouts.org",
    "keywords": [
      "girls",
      "scouting",
      "leadership",
      "character",
      "empowerment"
    ]
  },
  {
    "name": "Natural Resources Defense Council (NRDC)",
    "description": "Combines the power of more than three million members and online activists with the expertise of some 700 scientists, lawyers, and policy advocates to confront the climate crisis.",
    "website": "https://www.nrdc.org",
    "keywords": [
      "environment",
      "conservation",
      "climate",
      "advocacy",
      "policy"
    ]
  },
  {
    "name": "Oxfam America",
    "description": "A global organization that fights poverty, hunger, and injustice.",
    "website": "https://www.oxfamamerica.org",
    "keywords": [
      "poverty",
      "hunger",
      "justice",
      "relief",
      "global"
    ]
  },
  {
    "name": "Public Broadcasting Service (PBS)",
    "description": "Provides educational and entertaining television programming to the American public.",
    "website": "https://www.pbs.org",
    "keywords": [
      "media",
      "television",
      "education",
      "public",
      "culture"
    ]
  },
  {
    "name": "Share Our Strength",
    "description": "A national campaign to end childhood hunger in the United States.",
    "website": "https://www.nokidhungry.org",
    "keywords": [
      "hunger",
      "children",
      "food",
      "nutrition",
      "poverty"
    ]
  },
  {
    "name": "The Trust for Public Land",
    "description": "Creates parks and protects land for people, ensuring everyone has access to the outdoors.",
    "website": "https://www.tpl.org",
    "keywords": [
      "land",
      "parks",
      "outdoors",
      "conservation",
      "public"
    ]
  },
  {
    "name": "United Service Organizations (USO)",
    "description": "A non-profit organization that provides live entertainment, a social connection, and other programs to members of the armed forces.",
    "website": "https://www.uso.org",
    "keywords": [
      "military",
      "veterans",
      "entertainment",
      "support",
      "armed forces"
    ]
  },
  {
    "name": "The Urban League",
    "description": "Empowers African Americans and others in underserved communities to secure economic self-reliance, parity, power, and civil rights.",
    "website": "https://www.urbanleague.org",
    "keywords": [
      "civil rights",
      "economic",
      "empowerment",
      "African American",
      "community"
    ]
  },
  {
    "name": "The World Bank",
    "description": "Provides loans and grants to developing countries to fund capital projects.",
    "website": "https://www.worldbank.org",
    "keywords": [
      "finance",
      "development",
      "poverty",
      "loans",
      "global"
    ]
  },
  {
    "name": "The World Health Organization (WHO)",
    "description": "The directing and coordinating authority on international health within the United Nations system.",
    "website": "https://www.who.int",
    "keywords": [
      "health",
      "global",
      "disease",
      "public health",
      "united nations"
    ]
  },
  {
    "name": "The World Peace Foundation",
    "description": "Promotes peace and prevents violent conflict through research, dialogue, and public education.",
    "website": "https://sites.tufts.edu/worldpeacefoundation/",
    "keywords": [
      "peace",
      "conflict",
      "prevention",
      "research",
      "education"
    ]
  },
  {
    "name": "YMCA of the USA",
    "description": "Strengthens communities through programs that focus on youth development, healthy living, and social responsibility.",
    "website": "https://www.ymca.net",
    "keywords": [
      "youth",
      "community",
      "health",
      "development",
      "social"
    ]
  },
  {
    "name": "YWCA USA",
    "description": "Dedicated to eliminating racism, empowering women, and promoting peace, justice, freedom, and dignity for all.",
    "website": "https://www.ywca.org",
    "keywords": [
      "women",
      "racism",
      "peace",
      "justice",
      "empowerment"
    ]
  },
  {
    "name": "National Multiple Sclerosis Society",
    "description": "Mobilizes people and resources to drive research for a cure and to address the challenges of everyone affected by MS.",
    "website": "https://www.nationalmssociety.org",
    "keywords": [
      "MS",
      "research",
      "health",
      "support",
      "neurology"
    ]
  },
  {
    "name": "Crohn's & Colitis Foundation",
    "description": "Works to cure Crohn's disease and ulcerative colitis, and to improve the quality of life of children and adults affected by these diseases.",
    "website": "https://www.crohnscolitisfoundation.org",
    "keywords": [
      "Crohn's",
      "colitis",
      "digestive",
      "health",
      "research"
    ]
  },
  {
    "name": "Muscular Dystrophy Association",
    "description": "A nonprofit health agency dedicated to fighting muscular dystrophy and other muscle diseases.",
    "website": "https://www.mda.org",
    "keywords": [
      "muscular dystrophy",
      "health",
      "disease",
      "research",
      "support"
    ]
  },
  {
    "name": "National Kidney Foundation",
    "description": "Dedicated to the awareness, prevention, and treatment of kidney disease.",
    "website": "https://www.kidney.org",
    "keywords": [
      "kidney",
      "health",
      "disease",
      "prevention",
      "treatment"
    ]
  },
  {
    "name": "American Lung Association",
    "description": "Fights for clean air and a healthy environment, and provides research, education, and advocacy for lung disease.",
    "website": "https://www.lung.org",
    "keywords": [
      "lung",
      "health",
      "air quality",
      "disease",
      "advocacy"
    ]
  },
  {
    "name": "Susan G. Komen for the Cure",
    "description": "A breast cancer organization that funds research and provides support to patients.",
    "website": "https://www.komen.org",
    "keywords": [
      "cancer",
      "breast cancer",
      "research",
      "support",
      "health"
    ]
  },
  {
    "name": "Ducks Unlimited",
    "description": "Conserves, restores, and manages wetlands and associated habitats for North America's waterfowl.",
    "website": "https://www.ducks.org",
    "keywords": [
      "conservation",
      "wetlands",
      "wildlife",
      "outdoors",
      "nature"
    ]
  },
  {
    "name": "The Sierra Club",
    "description": "Promotes the responsible use of the Earth's ecosystems and resources.",
    "website": "https://www.sierraclub.org",
    "keywords": [
      "environment",
      "conservation",
      "outdoors",
      "advocacy",
      "nature"
    ]
  },
  {
    "name": "The National Parks Foundation",
    "description": "The official charity of America's national parks, raising funds to protect and preserve them.",
    "website": "https://www.nationalparks.org",
    "keywords": [
      "parks",
      "conservation",
      "outdoors",
      "nature",
      "America"
    ]
  },
  {
    "name": "World Resources Institute (WRI)",
    "description": "A global research organization that spans more than 60 countries, with offices in Brazil, China, Europe, India, Indonesia, Mexico, and the United States.",
    "website": "https://www.wri.org",
    "keywords": [
      "research",
      "environment",
      "global",
      "policy",
      "resources"
    ]
  },
  {
    "name": "The Arbor Day Foundation",
    "description": "Inspires people to plant, nurture, and celebrate trees.",
    "website": "https://www.arborday.org",
    "keywords": [
      "trees",
      "environment",
      "conservation",
      "planting",
      "nature"
    ]
  },
  {
    "name": "Wildlife Conservation Society",
    "description": "Saves wildlife and wild places worldwide through science, conservation action, education, and the management of a number of zoos and an aquarium.",
    "website": "https://www.wcs.org",
    "keywords": [
      "wildlife",
      "conservation",
      "zoos",
      "science",
      "education"
    ]
  },
  {
    "name": "The Wilderness Society",
    "description": "Protects wilderness and inspires Americans to care for our wild places.",
    "website": "https://www.wilderness.org",
    "keywords": [
      "wilderness",
      "conservation",
      "outdoors",
      "nature",
      "advocacy"
    ]
  },
  {
    "name": "National Wildlife Refuge Association",
    "description": "Works to ensure that the National Wildlife Refuge System is managed to its full potential.",
    "website": "https://www.refugeassociation.org",
    "keywords": [
      "wildlife",
      "refuge",
      "conservation",
      "management",
      "nature"
    ]
  },
  {
    "name": "National Marine Sanctuary Foundation",
    "description": "Supports the National Marine Sanctuary System with the goal of protecting and preserving our marine sanctuaries.",
    "website": "https://marinesanctuary.org",
    "keywords": [
      "marine",
      "sanctuary",
      "ocean",
      "conservation",
      "protection"
    ]
  },
  {
    "name": "Ocean Conservancy",
    "description": "Working to protect the ocean from today’s greatest global challenges.",
    "website": "https://oceanconservancy.org",
    "keywords": [
      "ocean",
      "conservation",
      "marine",
      "environment",
      "challenges"
    ]
  },
  {
    "name": "Trustees of Reservations",
    "description": "The world’s first and the Massachusetts' largest conservation and preservation nonprofit.",
    "website": "https://thetrustees.org",
    "keywords": [
      "conservation",
      "preservation",
      "land",
      "Massachusetts",
      "history"
    ]
  },
  {
    "name": "National Trust for Historic Preservation",
    "description": "Protects historic places and advocates for historic preservation.",
    "website": "https://savingplaces.org",
    "keywords": [
      "historic",
      "preservation",
      "buildings",
      "history",
      "advocacy"
    ]
  },
  {
    "name": "National Museum of the American Indian",
    "description": "Preserves and studies the cultures of Native Americans throughout the Western Hemisphere.",
    "website": "https://americanindian.si.edu",
    "keywords": [
      "native",
      "history",
      "culture",
      "museum",
      "education"
    ]
  },
  {
    "name": "Smithsonian Institution",
    "description": "The world’s largest museum, education, and research complex.",
    "website": "https://www.si.edu",
    "keywords": [
      "museum",
      "education",
      "research",
      "culture",
      "science"
    ]
  },
  {
    "name": "The Getty Foundation",
    "description": "A cultural and philanthropic organization that funds art history, conservation, and museum leadership programs.",
    "website": "https://www.getty.edu",
    "keywords": [
      "art",
      "history",
      "conservation",
      "museum",
      "culture"
    ]
  },
  {
    "name": "The Metropolitan Museum of Art",
    "description": "One of the world's largest and finest art museums, with collections spanning 5,000 years of art.",
    "website": "https://www.metmuseum.org",
    "keywords": [
      "art",
      "museum",
      "culture",
      "history",
      "collections"
    ]
  },
  {
    "name": "The Guggenheim Foundation",
    "description": "Operates a network of art museums and promotes modern and contemporary art.",
    "website": "https://www.guggenheim.org",
    "keywords": [
      "art",
      "museum",
      "modern art",
      "contemporary",
      "culture"
    ]
  },
  {
    "name": "Carnegie Corporation of New York",
    "description": "A philanthropic foundation that works to strengthen democracy and advance education and knowledge.",
    "website": "https://www.carnegie.org",
    "keywords": [
      "philanthropy",
      "democracy",
      "education",
      "research",
      "knowledge"
    ]
  },
  {
    "name": "The Rockefeller Foundation",
    "description": "Promotes the well-being of humanity throughout the world.",
    "website": "https://www.rockefellerfoundation.org",
    "keywords": [
      "philanthropy",
      "humanity",
      "well-being",
      "global",
      "development"
    ]
  },
  {
    "name": "The Bill & Melinda Gates Foundation",
    "description": "Works to reduce poverty and improve health in developing countries, and to ensure all Americans have access to the resources they need to succeed in life.",
    "website": "https://www.gatesfoundation.org",
    "keywords": [
      "poverty",
      "health",
      "global",
      "development",
      "education"
    ]
  },
  {
    "name": "Gordon and Betty Moore Foundation",
    "description": "Works to create positive outcomes for future generations in the areas of environmental conservation, patient care, and scientific research.",
    "website": "https://www.moore.org",
    "keywords": [
      "conservation",
      "patient care",
      "research",
      "environment",
      "science"
    ]
  },
  {
    "name": "The David and Lucile Packard Foundation",
    "description": "Works to create a just and equitable world where both people and nature thrive.",
    "website": "https://www.packard.org",
    "keywords": [
      "equity",
      "environment",
      "women's rights",
      "science",
      "conservation"
    ]
  },
  {
    "name": "Luminate",
    "description": "A global philanthropic organization focused on empowering people and institutions to work together to build just and fair societies.",
    "website": "https://luminate.org",
    "keywords": [
      "philanthropy",
      "justice",
      "societies",
      "empowerment",
      "human rights"
    ]
  },
  {
    "name": "The Annie E. Casey Foundation",
    "description": "Dedicated to building a brighter future for children and their families.",
    "website": "https://www.aecf.org",
    "keywords": [
      "children",
      "families",
      "youth",
      "future",
      "development"
    ]
  },
  {
    "name": "The Lumina Foundation",
    "description": "Committed to making opportunities for learning beyond high school available to all.",
    "website": "https://www.luminafoundation.org",
    "keywords": [
      "education",
      "learning",
      "college",
      "opportunity",
      "students"
    ]
  },
  {
    "name": "W.K. Kellogg Foundation",
    "description": "Supports children, families, and communities as they strengthen and create conditions for optimal child well-being.",
    "website": "https://www.kellogg.org",
    "keywords": [
      "children",
      "families",
      "community",
      "well-being",
      "development"
    ]
  },
  {
    "name": "The MacArthur Foundation",
    "description": "Works to build a more just, verdant, and peaceful world.",
    "website": "https://www.macfound.org",
    "keywords": [
      "peace",
      "justice",
      "environment",
      "research",
      "global"
    ]
  },
  {
    "name": "The Pew Charitable Trusts",
    "description": "A global non-governmental organization that applies a rigorous, analytical approach to improve public policy, inform the public, and invigorate civic life.",
    "website": "https://www.pewtrusts.org",
    "keywords": [
      "public policy",
      "research",
      "environment",
      "ocean",
      "civic"
    ]
  },
  {
    "name": "The Robert Wood Johnson Foundation",
    "description": "Dedicated to improving health and health care for all Americans.",
    "website": "https://www.rwjf.org",
    "keywords": [
      "health",
      "healthcare",
      "public health",
      "policy",
      "America"
    ]
  },
  {
    "name": "The Walton Family Foundation",
    "description": "Works to improve K-12 education, protect the environment, and strengthen communities.",
    "website": "https://www.waltonfamilyfoundation.org",
    "keywords": [
      "education",
      "environment",
      "community",
      "K-12",
      "conservation"
    ]
  },
  {
    "name": "The William and Flora Hewlett Foundation",
    "description": "Supports efforts to improve lives for people around the world.",
    "website": "https://www.hewlett.org",
    "keywords": [
      "global",
      "environment",
      "education",
      "philanthropy",
      "development"
    ]
  },
  {
    "name": "The American Heart Association",
    "description": "Works to build healthier lives, free of cardiovascular diseases and stroke.",
    "website": "https://www.heart.org",
    "keywords": [
      "heart",
      "health",
      "disease",
      "stroke",
      "prevention"
    ]
  },
  {
    "name": "The Arthritis Foundation",
    "description": "The Arthritis Foundation is a non-profit organization dedicated to the prevention, control, and cure of arthritis.",
    "website": "https://www.arthritis.org",
    "keywords": [
      "arthritis",
      "health",
      "research",
      "disease",
      "support"
    ]
  },
  {
    "name": "The National Breast Cancer Foundation",
    "description": "Provides help and inspire hope to those affected by breast cancer through early detection, education, and support services.",
    "website": "https://www.nationalbreastcancer.org",
    "keywords": [
      "cancer",
      "breast cancer",
      "detection",
      "support",
      "health"
    ]
  },
  {
    "name": "The Melanoma Research Foundation",
    "description": "Dedicated to the eradication of melanoma by supporting medical research.",
    "website": "https://melanoma.org",
    "keywords": [
      "melanoma",
      "cancer",
      "research",
      "skin cancer",
      "health"
    ]
  },
  {
    "name": "The National Osteoporosis Foundation",
    "description": "Dedicated to preventing osteoporosis and broken bones, promoting a lifetime of strong bones, and finding a cure.",
    "website": "https://www.nof.org",
    "keywords": [
      "osteoporosis",
      "bones",
      "health",
      "prevention",
      "research"
    ]
  },
  {
    "name": "The National Eczema Association",
    "description": "Dedicated to improving the health and quality of life for individuals with eczema through research, education, and support.",
    "website": "https://nationaleczema.org",
    "keywords": [
      "eczema",
      "health",
      "skin",
      "research",
      "support"
    ]
  },
  {
    "name": "The National Deaf-Blind Equipment Distribution Program",
    "description": "Provides people with hearing and vision loss with technology to connect with others.",
    "website": "https://www.icdr.us/national-dbedp",
    "keywords": [
      "deaf-blind",
      "technology",
      "hearing",
      "vision",
      "accessibility"
    ]
  },
  {
    "name": "The American Association of People with Disabilities",
    "description": "A cross-disability organization that advocates for the civil rights of people with disabilities.",
    "website": "https://www.aapd.com",
    "keywords": [
      "disabilities",
      "civil rights",
      "advocacy",
      "accessibility",
      "equality"
    ]
  },
  {
    "name": "The Autism Society of America",
    "description": "Provides support and education to individuals with autism and their families.",
    "website": "https://www.autism-society.org",
    "keywords": [
      "autism",
      "support",
      "education",
      "families",
      "advocacy"
    ]
  },
  {
    "name": "The National Organization for Rare Disorders (NORD)",
    "description": "Dedicated to helping people with rare diseases through education, advocacy, and research.",
    "website": "https://rarediseases.org",
    "keywords": [
      "rare diseases",
      "research",
      "advocacy",
      "education",
      "health"
    ]
  },
  {
    "name": "The American Kidney Fund",
    "description": "Helps people fight kidney disease and live healthier lives.",
    "website": "https://www.kidneyfund.org",
    "keywords": [
      "kidney",
      "health",
      "disease",
      "support",
      "finance"
    ]
  },
  {
    "name": "The National Brain Tumor Society",
    "description": "Drives research and public policy for the brain tumor community.",
    "website": "https://braintumor.org",
    "keywords": [
      "brain",
      "tumor",
      "research",
      "policy",
      "advocacy"
    ]
  },
  {
    "name": "The American Porphyria Foundation",
    "description": "Dedicated to the diagnosis, treatment, and cure of porphyria.",
    "website": "https://porphyriafoundation.org",
    "keywords": [
      "porphyria",
      "health",
      "disease",
      "treatment",
      "cure"
    ]
  },
  {
    "name": "The National Hemophilia Foundation",
    "description": "Finds cures for bleeding disorders and to prevent the complications of these disorders through research.",
    "website": "https://www.hemophilia.org",
    "keywords": [
      "hemophilia",
      "bleeding",
      "health",
      "disease",
      "research"
    ]
  },
  {
    "name": "The American Autoimmune Related Diseases Association",
    "description": "Dedicated to the eradication of autoimmune diseases and the alleviation of suffering and the socioeconomic impact of autoimmunity.",
    "website": "https://www.aarda.org",
    "keywords": [
      "autoimmune",
      "disease",
      "research",
      "health",
      "advocacy"
    ]
  },
  {
    "name": "Human Rights Watch",
    "description": "Investigates and reports on abuses happening in all corners of the world.",
    "website": "https://www.hrw.org",
    "keywords": [
      "human rights",
      "justice",
      "abuse",
      "investigation",
      "global"
    ]
  },
  {
    "name": "The NAACP Legal Defense and Educational Fund",
    "description": "America's premier legal organization fighting for racial justice.",
    "website": "https://www.naacpldf.org",
    "keywords": [
      "racial justice",
      "legal",
      "education",
      "civil rights",
      "advocacy"
    ]
  },
  {
    "name": "The Southern Poverty Law Center",
    "description": "A catalyst for racial justice in the South and beyond, working to dismantle white supremacy, strengthen intersectional movements, and advance the human rights of all people.",
    "website": "https://www.splcenter.org",
    "keywords": [
      "racial justice",
      "poverty",
      "law",
      "advocacy",
      "human rights"
    ]
  },
  {
    "name": "The Anti-Defamation League (ADL)",
    "description": "A leading anti-hate organization that fights antisemitism and all forms of hate.",
    "website": "https://www.adl.org",
    "keywords": [
      "hate",
      "antisemitism",
      "advocacy",
      "civil rights",
      "justice"
    ]
  },
  {
    "name": "The National Urban League",
    "description": "Dedicated to economic empowerment, equality, and social justice for African Americans and others in underserved communities.",
    "website": "https://www.urbanleague.org",
    "keywords": [
      "economic",
      "equality",
      "social justice",
      "African American",
      "community"
    ]
  },
  {
    "name": "The Equal Justice Initiative",
    "description": "Committed to ending mass incarceration and excessive punishment in the United States, to challenging racial and economic injustice, and to protecting basic human rights for the most vulnerable people in American society.",
    "website": "https://eji.org",
    "keywords": [
      "justice",
      "incarceration",
      "racial justice",
      "human rights",
      "advocacy"
    ]
  },
  {
    "name": "The Thurgood Marshall College Fund",
    "description": "Supports and represents students attending Historically Black Colleges and Universities (HBCUs) and Predominantly Black Institutions (PBIs).",
    "website": "https://www.tmcf.org",
    "keywords": [
      "HBCU",
      "education",
      "college",
      "students",
      "black"
    ]
  },
  {
    "name": "The Legal Aid Society",
    "description": "The nation's oldest and largest not-for-profit legal aid organization.",
    "website": "https://www.legalaidnyc.org",
    "keywords": [
      "legal",
      "aid",
      "justice",
      "nonprofit",
      "law"
    ]
  },
  {
    "name": "The Brennan Center for Justice",
    "description": "A nonpartisan law and policy institute that works to improve the systems of democracy and justice in the United States.",
    "website": "https://www.brennancenter.org",
    "keywords": [
      "justice",
      "democracy",
      "policy",
      "legal",
      "advocacy"
    ]
  },
  {
    "name": "The Transgender Law Center",
    "description": "The largest national trans-led organization advocating for a world in which all people are free to define themselves and their futures.",
    "website": "https://www.transgenderlawcenter.org",
    "keywords": [
      "transgender",
      "legal",
      "advocacy",
      "rights",
      "justice"
    ]
  },
  {
    "name": "The American Association of University Women (AAUW)",
    "description": "Advances equity for women and girls through advocacy, education, and research.",
    "website": "https://www.aauw.org",
    "keywords": [
      "women",
      "girls",
      "equity",
      "education",
      "advocacy"
    ]
  },
  {
    "name": "The National Organization for Women (NOW) Foundation",
    "description": "A feminist organization that promotes equal rights and opportunities for women.",
    "website": "https://now.org",
    "keywords": [
      "women",
      "feminist",
      "equality",
      "rights",
      "advocacy"
    ]
  },
  {
    "name": "The Feminist Majority Foundation",
    "description": "Dedicated to women's equality, reproductive health, and non-violence.",
    "website": "https://feminist.org",
    "keywords": [
      "women's rights",
      "equality",
      "feminist",
      "health",
      "advocacy"
    ]
  },
  {
    "name": "The Ms. Foundation for Women",
    "description": "A national foundation that invests in and strengthens the power of women of color and their communities.",
    "website": "https://forwomen.org",
    "keywords": [
      "women",
      "women of color",
      "foundation",
      "empowerment",
      "equity"
    ]
  },
  {
    "name": "The Malala Fund",
    "description": "Works for a world where every girl can learn and lead.",
    "website": "https://www.malala.org",
    "keywords": [
      "girls",
      "education",
      "leadership",
      "equality",
      "global"
    ]
  },
  {
    "name": "CARE",
    "description": "A global organization working to save lives, defeat poverty, and achieve social justice.",
    "website": "https://www.care.org",
    "keywords": [
      "poverty",
      "social justice",
      "aid",
      "global",
      "development"
    ]
  },
  {
    "name": "The Global FoodBanking Network",
    "description": "Works to alleviate hunger by creating and supporting food banks in countries around the world.",
    "website": "https://www.foodbanking.org",
    "keywords": [
      "hunger",
      "food banks",
      "global",
      "relief",
      "community"
    ]
  },
  {
    "name": "The Akshaya Patra Foundation",
    "description": "Strives to eliminate classroom hunger by implementing the Mid-Day Meal Programme.",
    "website": "https://www.akshayapatra.org",
    "keywords": [
      "hunger",
      "children",
      "food",
      "education",
      "India"
    ]
  },
  {
    "name": "Food for the Poor",
    "description": "A Christian-based organization that provides food, housing, healthcare, and education to those in poverty.",
    "website": "https://www.foodforthepoor.org",
    "keywords": [
      "poverty",
      "food",
      "housing",
      "healthcare",
      "education"
    ]
  },
  {
    "name": "Doctors of the World",
    "description": "An independent humanitarian movement working to make health care a human right.",
    "website": "https://doctorsoftheworld.org",
    "keywords": [
      "healthcare",
      "humanitarian",
      "global",
      "rights",
      "medical"
    ]
  },
  {
    "name": "International Medical Corps",
    "description": "Provides medical relief and training to those affected by disaster, disease or conflict.",
    "website": "https://internationalmedicalcorps.org",
    "keywords": [
      "medical",
      "relief",
      "disaster",
      "conflict",
      "health"
    ]
  },
  {
    "name": "The National Center for Missing & Exploited Children",
    "description": "A private, non-profit organization that serves as the nation's clearinghouse for missing and exploited children.",
    "website": "https://www.missingkids.org",
    "keywords": [
      "children",
      "missing",
      "exploitation",
      "safety",
      "awareness"
    ]
  },
  {
    "name": "The Make-A-Wish Foundation",
    "description": "Grants wishes to children with critical illnesses to enrich the human experience with hope, strength and joy.",
    "website": "https://www.wish.org",
    "keywords": [
      "children",
      "wish",
      "disease",
      "cancer",
      "hope"
    ]
  },
  {
    "name": "The Women's Sports Foundation",
    "description": "Dedicated to advancing the lives of girls and women through sports and physical activity.",
    "website": "https://www.womenssportsfoundation.org",
    "keywords": [
      "women",
      "sports",
      "girls",
      "equality",
      "physical activity"
    ]
  },
  {
    "name": "The Prostate Cancer Foundation",
    "description": "Dedicated to curing prostate cancer through an investment in scientific research.",
    "website": "https://www.pcf.org",
    "keywords": [
      "cancer",
      "prostate",
      "research",
      "health",
      "funding"
    ]
  },
  {
    "name": "The Children's Heart Foundation",
    "description": "Dedicated to funding the most promising research to advance the diagnosis, treatment, and prevention of congenital heart defects.",
    "website": "https://www.childrensheartfoundation.org",
    "keywords": [
      "children",
      "heart",
      "health",
      "research",
      "congenital"
    ]
  },
  {
    "name": "The Lymphoma Research Foundation",
    "description": "Dedicated to finding a cure for lymphoma and providing support to patients.",
    "website": "https://www.lymphoma.org",
    "keywords": [
      "lymphoma",
      "cancer",
      "research",
      "health",
      "support"
    ]
  },
  {
    "name": "The National Ataxia Foundation",
    "description": "A national organization dedicated to improving the lives of people affected by ataxia.",
    "website": "https://www.ataxia.org",
    "keywords": [
      "ataxia",
      "health",
      "neurology",
      "support",
      "research"
    ]
  },
  {
    "name": "The Alzheimer's Foundation of America",
    "description": "Provides support, services, and education to individuals, families, and caregivers affected by Alzheimer's disease.",
    "website": "https://alzfdn.org",
    "keywords": [
      "Alzheimer's",
      "dementia",
      "support",
      "education",
      "caregivers"
    ]
  },
  {
    "name": "The Huntington's Disease Society of America",
    "description": "The largest non-profit organization dedicated to improving the lives of everyone affected by Huntington's disease.",
    "website": "https://hdsa.org",
    "keywords": [
      "Huntington's",
      "health",
      "neurology",
      "disease",
      "support"
    ]
  },
  {
    "name": "The Myasthenia Gravis Foundation of America",
    "description": "Dedicated to finding a cure for myasthenia gravis and related autoimmune diseases.",
    "website": "https://myasthenia.org",
    "keywords": [
      "myasthenia gravis",
      "autoimmune",
      "research",
      "health",
      "cure"
    ]
  },
  {
    "name": "The Autism Society",
    "description": "Provides support and education to individuals with autism and their families.",
    "website": "https://www.autism-society.org",
    "keywords": [
      "autism",
      "support",
      "education",
      "families",
      "advocacy"
    ]
  },
  {
    "name": "Global Clean Water Trust",
    "description": "Funds clean water projects in drought-affected regions.",
    "website": "https://www.globalcleanwatertrust.org",
    "keywords": [
      "water",
      "clean",
      "drought",
      "projects"
    ]
  },
  {
    "name": "Bright Start Reading",
    "description": "Runs early reading intervention programs for preschoolers.",
    "website": "https://www.brightstartreading.org",
    "keywords": [
      "reading",
      "early",
      "preschool",
      "intervention"
    ]
  },
  {
    "name": "Harvest Hands Youth",
    "description": "Teaches farming and nutrition to youth groups.",
    "website": "https://www.harvesthandsyouth.org",
    "keywords": [
      "farming",
      "nutrition",
      "youth",
      "groups"
    ]
  },
  {
    "name": "Hope for the Unhoused",
    "description": "Provides emergency shelter and meals to homeless individuals.",
    "website": "https://www.hopefortheunhoused.org",
    "keywords": [
      "homeless",
      "shelter",
      "meals",
      "emergency"
    ]
  },
  {
    "name": "Urban Arts Collective",
    "description": "Empowers youth through street art and creative workshops.",
    "website": "https://www.urbanartscollective.org",
    "keywords": [
      "youth",
      "street art",
      "creative",
      "workshops"
    ]
  },
  {
    "name": "Next Steps for Newcomers",
    "description": "Guides immigrants and refugees through community integration.",
    "website": "https://www.nextstepsfornewcomers.org",
    "keywords": [
      "immigrants",
      "refugees",
      "integration",
      "community"
    ]
  },
  {
    "name": "Clean Rivers Initiative",
    "description": "Organizes river cleanup events and public awareness campaigns.",
    "website": "https://www.cleanriversinitiative.org",
    "keywords": [
      "rivers",
      "cleanup",
      "awareness",
      "events"
    ]
  },
  {
    "name": "Healthy Hearts for Women",
    "description": "Promotes cardiovascular health awareness for women.",
    "website": "https://www.healthyheartsforwomen.org",
    "keywords": [
      "health",
      "cardiovascular",
      "women",
      "awareness"
    ]
  },
  {
    "name": "Bridge2Books",
    "description": "Donates books and builds libraries in remote schools.",
    "website": "https://www.bridge2books.org",
    "keywords": [
      "books",
      "libraries",
      "remote",
      "schools"
    ]
  },
  {
    "name": "Global Eco Fund",
    "description": "Supports reforestation and wildlife protection projects.",
    "website": "https://www.globalecofund.org",
    "keywords": [
      "reforestation",
      "wildlife",
      "projects",
      "protection"
    ]
  },
  {
    "name": "Safe Sound Project",
    "description": "Provides hearing protection and screenings for musicians and workers.",
    "website": "https://www.safesoundproject.org",
    "keywords": [
      "hearing",
      "protection",
      "screening",
      "workers"
    ]
  },
  {
    "name": "PTSD Foundation of America",
    "description": "Provides services, programs and support to veterans who suffer from trauma daily",
    "website": "https://ptsdusa.org",
    "keywords": [
      "PTSD"
      "veteran",
      "trama",
      "stress"
    ]
  }
];
