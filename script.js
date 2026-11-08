/**
 * ====================================================================
 * دليلك الكامل لمواد علم الحاسوب | CS Hub
 * ملف الجافا سكريبت الرئيسي للتحكم بكافة وظائف الموقع التفاعلية
 * ====================================================================
 * المحتويات:
 * 1. قاعدة البيانات الافتراضية والتهيئة الأولية (Initial Dataset & Storage)
 * 2. التحكم في المظهر (الوضع الليلي والنهاري وتأثير المسح الدائري)
 * 3. سماء ليلة النجوم الفلكية والنجوم المتحركة (Starry Night & Sky Canvas)
 * 4. تأثير الإمالة ثلاثي الأبعاد والبارالاكس (3D Parallax & Tilt Effect)
 * 5. محاكي الحاسوب المحمول والشيفرات البرمجية (3D Laptop Code Typer)
 * 6. محرك توليد المخططات البيانية SVG (Interactive Diagram Generators)
 * 7. لوحة الرسم والملاحظات المرئية التفاعلية (Drawing Canvas & Palette)
 * 8. محرك البحث والفلترة والتلميحات الحركية (Search, Typewriter & Filter)
 * 9. إدارة شبكة بطاقات المواد الدراسية (Subjects Grid & Cards Engine)
 * 10. نافذة تفاصيل المادة والتبويبات الداخلية (Details Modal & Tabs System)
 * 11. نافذة إضافة مادة جديدة (Add New Subject Modal)
 * 12. عدادات الإحصائيات الحية التفاعلية (Animated Stats Counters)
 * 13. اختصارات لوحة المفاتيح والتهيئة عند الإقلاع (Keyboard Shortcuts & Init)
 * ====================================================================
 */

'use strict';

// مفاتيح التخزين المحلي في المتصفح (LocalStorage Keys)
const STORAGE_KEY_DATA = 'cs_hub_subjects_v2';
const STORAGE_KEY_THEME = 'cs_hub_theme_mode';

/* ====================================================================
   1. قاعدة البيانات الأولية لمواد علم الحاسوب (Initial Subjects Data)
   ==================================================================== */
const INITIAL_SUBJECTS = [
  {
    id: 'data-structures',
    title: 'هياكل البيانات',
    en: 'Data Structures',
    cat: 'هياكل وخوارزميات',
    year: 'الثانية',
    icon: '🌳',
    color: '#5b4bff',
    art: 'tree',
    desc: 'دراسة طرق تنظيم وتخزين البيانات في ذاكرة الحاسوب بكفاءة، مثل القوائم المترابطة، الأشجار، والمكدسات، وكيفية التعامل معها برمجياً.',
    topics: ['المصفوفات (Arrays)', 'القوائم المترابطة (Linked Lists)', 'المكدس ورتل الانتظار (Stack & Queue)', 'أشجار البحث الثنائية (BST)', 'جداول التجزئة (Hash Tables)', 'الأكوام (Heaps)'],
    resources: [
      { id: 1, title: 'كورس هياكل البيانات من جامعة هارفارد (CS50)', url: 'https://cs50.harvard.edu/', type: 'كورس مجاني', desc: 'شرح عملي ومبسط لإدارة الذاكرة والمؤشرات وهياكل البيانات بلغة C.' },
      { id: 2, title: 'Visualgo - الرسوم التفاعلية لهياكل البيانات', url: 'https://visualgo.net/', type: 'موقع تفاعلي', desc: 'موقع ممتاز لرؤية حركة وحذف وإضافة العناصر في الأشجار والقوائم خطوة بخطوة.' },
      { id: 3, title: 'كتاب Data Structures in Python', url: 'https://runestone.academy/', type: 'كتاب رقمي', desc: 'تطبيق عملي لأهم هياكل البيانات باستخدام لغة بايثون.' }
    ],
    comments: [
      { id: 1, author: 'أحمد السعيد', date: '2026-10-15', text: 'فهم القوائم المترابطة والمؤشرات هو المفتاح لفهم بقية هياكل البيانات المتقدمة.' },
      { id: 2, author: 'سارة المهندس', date: '2026-10-28', text: 'أنصح بشدة بحل مسائل LeetCode المتعلقة بالـ Trees و Hash Maps.' }
    ],
    drawing: null
  },
  {
    id: 'algorithms',
    title: 'تصميم وتحليل الخوارزميات',
    en: 'Algorithms Design & Analysis',
    cat: 'هياكل وخوارزميات',
    year: 'الثانية',
    icon: '⚡',
    color: '#e8923a',
    art: 'sort',
    desc: 'تعلم استراتيجيات التفكير الخوارزمي، تقييم التعقيد الحسابي (Big-O)، وتقنيات الفرز والبحث والبرمجة الديناميكية لحل المشكلات المعقدة.',
    topics: ['حساب التعقيد الزمني والمكاني (Big-O)', 'فرّق تسد (Divide and Conquer)', 'خوارزميات الفرز والبحث المتقدم', 'البرمجة الديناميكية (Dynamic Programming)', 'الخوارزميات الجشعة (Greedy Algorithms)', 'خوارزميات المخططات (Dijkstra, BFS, DFS)'],
    resources: [
      { id: 1, title: 'محاضرات عبد الباري للخوارزميات (Abdul Bari)', url: 'https://www.youtube.com/@abdul_bari', type: 'يوتيوب', desc: 'أشهر وأوضح شرح مرئي للخوارزميات والبرمجة الديناميكية على الإطلاق.' },
      { id: 2, title: 'MIT 6.006: مقدمة في الخوارزميات', url: 'https://ocw.mit.edu/', type: 'كورس أكاديمي', desc: 'منهاج معهد ماساتشوستس للتقنية مع واجبات ومشاريع برمجية حقيقية.' },
      { id: 3, title: 'منصة LeetCode للتدريب العملي', url: 'https://leetcode.com/', type: 'تطبيق عملي', desc: 'حل المشكلات البرمجية للتحضير لمقابلات كبرى شركات البرمجة عالمياً.' }
    ],
    comments: [
      { id: 1, author: 'عمر التميمي', date: '2026-09-12', text: 'البرمجة الديناميكية تحتاج إلى رسم جدول الحالات لتجنب الحسابات المكررة.' }
    ],
    drawing: null
  },
  {
    id: 'database-systems',
    title: 'أنظمة إدارة قواعد البيانات',
    en: 'Database Management Systems',
    cat: 'قواعد بيانات',
    year: 'الثانية',
    icon: '🗄️',
    color: '#00c2a8',
    art: 'table',
    desc: 'مفاهيم تصميم وهندسة قواعد البيانات العلائقية وغير العلائقية، لغة SQL، تسوية الجداول، المعاملات، والفهرسة لتحقيق أعلى أداء.',
    topics: ['النموذج العلائقي (Relational Model)', 'لغة الاستعلامات البنيوية (SQL)', 'مخططات الكيان والعلاقة (ERD)', 'تسوية قواعد البيانات (Normalization)', 'معايير ACID والمعاملات المتزامنة', 'الفهرسة (B-Tree Indexing)', 'قواعد بيانات NoSQL'],
    resources: [
      { id: 1, title: 'SQLZoo - تدريب تفاعلي على استعلامات SQL', url: 'https://sqlzoo.net/', type: 'موقع تفاعلي', desc: 'تمارين تفاعلية مباشرة لكتابة استعلامات SELECT و JOIN و GROUP BY.' },
      { id: 2, title: 'توثيق PostgreSQL الرسمي ودليل المعمارية', url: 'https://www.postgresql.org/docs/', type: 'توثيق رسمي', desc: 'المرجع الأفضل لفهم كيفية تخزين البيانات والفهارس داخلياً.' }
    ],
    comments: [
      { id: 1, author: 'مريم الكردي', date: '2026-10-04', text: 'لا تبدأ بإنشاء الجداول قبل تصميم الـ ERD بشكل صحيح والتأكد من العلاقات.' }
    ],
    drawing: null
  },
  {
    id: 'computer-networks',
    title: 'شبكات الحاسوب',
    en: 'Computer Networks',
    cat: 'أنظمة وشبكات',
    year: 'الثالثة',
    icon: '🌐',
    color: '#6fa8ff',
    art: 'layers',
    desc: 'استكشاف معمارية الاتصالات وتبادل البيانات بين الأجهزة عبر طبقات نموذج OSI وحزمة بروتوكولات الإنترنت TCP/IP وتطبيقات الويب.',
    topics: ['نموذج الطبقات السبع (OSI Model)', 'حزمة بروتوكولات الإنترنت (TCP/IP)', 'عنونة وتوجيه الشبكات (IP & Subnetting)', 'بروتوكولات النقل (TCP vs UDP)', 'نظام أسماء النطاقات (DNS)', 'بروتوكولات التطبيقات (HTTP/HTTPS, SSH)', 'برمجة المقابس (Socket Programming)'],
    resources: [
      { id: 1, title: 'كتاب Computer Networking: A Top-Down Approach', url: 'https://gaia.cs.umass.edu/kurose_ross/', type: 'كتاب أكاديمي', desc: 'المرجع القياسي العالمي المعتمد في معظم الجامعات لتدريس الشبكات.' },
      { id: 2, title: 'شروحات NetworkChuck على يوتيوب', url: 'https://www.youtube.com/@NetworkChuck', type: 'يوتيوب', desc: 'شروحات ممتعة وعملية للشبكات باستخدام أدوات سيسكو و Wireshark.' }
    ],
    comments: [
      { id: 1, author: 'خالد عبد الله', date: '2026-10-20', text: 'استخدام برنامج Wireshark لتحليل حزم البيانات يجعل فهم بروتوكول TCP بديهياً جداً.' }
    ],
    drawing: null
  },
  {
    id: 'operating-systems',
    title: 'أنظمة التشغيل',
    en: 'Operating Systems',
    cat: 'أنظمة وشبكات',
    year: 'الثالثة',
    icon: '⚙️',
    color: '#b8a2ff',
    art: 'flow',
    desc: 'التعمق في كيفية إدارة عتاد الحاسوب والبرمجيات: الجدولة الزمنية للمعالج، إدارة الذاكرة الظاهرية، الخيوط، والتزامن وحل مشكلات الجمود.',
    topics: ['إدارة العمليات والخيوط (Processes & Threads)', 'خوارزميات جدولة المعالج (CPU Scheduling)', 'التزامن وأقفال التبادل (Mutex & Semaphores)', 'حالات التعليق والجمود (Deadlocks)', 'الذاكرة الظاهرية والتقطيع (Virtual Memory & Paging)', 'نظم الملفات وحماية الموارد (File Systems)'],
    resources: [
      { id: 1, title: 'كتاب OSTEP المجاني (Operating Systems: Three Easy Pieces)', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', type: 'كتاب رقمي', desc: 'أفضل وأمتع كتاب حديث يشرح أنظمة التشغيل ومفاهيم المحاكاة الافتراضية والتزامن.' },
      { id: 2, title: 'محاضرات UC Berkeley CS162', url: 'https://cs162.org/', type: 'كورس جامعي', desc: 'محاضرات ومشاريع عملية في بناء وبرمجة نظام تشغيل حقيقي بلغة C.' }
    ],
    comments: [
      { id: 1, author: 'ياسين النجار', date: '2026-11-01', text: 'موضوع إدارة الذاكرة الظاهرية (Paging) يحتاج إلى حل أمثلة حسابية يدوياً.' }
    ],
    drawing: null
  },
  {
    id: 'artificial-intelligence',
    title: 'الذكاء الاصطناعي',
    en: 'Artificial Intelligence',
    cat: 'ذكاء اصطناعي',
    year: 'الثالثة',
    icon: '🧠',
    color: '#ff7ad9',
    art: 'net',
    desc: 'مقدمة للعملاء الأذكياء (Intelligent Agents)، خوارزميات البحث التوجيهي، الاستدلال المنطقي، نظرية الألعاب، والأنظمة الخبيرة.',
    topics: ['خوارزميات البحث المستنير (A* & Heuristic Search)', 'ألعاب التنافس وخوارزمية Minimax مع تقليم ألفا-بيتا', 'الاستدلال وتمثيل المعرفة (Knowledge Representation)', 'الاحتمالات وشبكات بايز (Bayesian Networks)', 'المنطق الضبابي (Fuzzy Logic)', 'مقدمة التعلم الآلي والروبوتات'],
    resources: [
      { id: 1, title: 'كتاب الذكاء الاصطناعي الحديث (Russell & Norvig)', url: 'http://aima.cs.berkeley.edu/', type: 'كتاب أكاديمي', desc: 'المرجع الشامل للذكاء الاصطناعي والمعتمد في كبرى الجامعات العالمية.' },
      { id: 2, title: 'كورس Berkeley CS188 Intro to AI', url: 'https://inst.eecs.berkeley.edu/~cs188/', type: 'كورس جامعي', desc: 'مشاريع Pac-Man الشهيرة لتطبيق خوارزميات البحث و Reinforcement Learning.' }
    ],
    comments: [
      { id: 1, author: 'هدى المحمد', date: '2026-10-18', text: 'تطبيق خوارزمية A* في ألعاب المتاهة يساعد جداً في استيعاب فكرة دالة التقريب (Heuristic).' }
    ],
    drawing: null
  },
  {
    id: 'machine-learning',
    title: 'تعلم الآلة والتعلم العميق',
    en: 'Machine Learning & Deep Learning',
    cat: 'ذكاء اصطناعي',
    year: 'الرابعة',
    icon: '🤖',
    color: '#4ade80',
    art: 'nn',
    desc: 'بناء النماذج الذكية القادرة على التعلم من البيانات: التعلم المراقب وغير المراقب، الشبكات العصبية العميقة، والانحدار الخطي واللوجستي.',
    topics: ['الانحدار الخطي واللوجستي (Linear & Logistic Regression)', 'خوارزمية نزول التدرج (Gradient Descent)', 'الشبكات العصبية والانتشار الخلفي (Backpropagation)', 'الشبكات العصبية الالتفافية (CNN)', 'النماذج اللغوية الكبيرة والتعلم بالتعزيز (LLMs & RL)', 'تقييم النماذج وتجنب الإفراط في الملاءمة (Overfitting)'],
    resources: [
      { id: 1, title: 'تخصص التعلم الآلي لأندرو إنغ (Andrew Ng - Coursera)', url: 'https://www.coursera.org/', type: 'كورس تفاعلي', desc: 'أشهر دورة تأسيسية للمبتدئين في الرياضيات وخوارزميات تعلم الآلة.' },
      { id: 2, title: 'توثيق مكتبة PyTorch الرسمية مع أمثلة تعليمية', url: 'https://pytorch.org/tutorials/', type: 'توثيق رسمي', desc: 'الدليل العملي لبناء الشبكات العصبية العميقة وتدريب النماذج على بطاقات GPU.' }
    ],
    comments: [
      { id: 1, author: 'سامي الزين', date: '2026-10-30', text: 'فهم الجبر الخطي والمصفوفات والاشتقاق الجزئي يجعل فهم معادلات الـ Backprop سهلاً للغاية.' }
    ],
    drawing: null
  },
  {
    id: 'cybersecurity',
    title: 'أمن المعلومات والتشفير',
    en: 'Information Security & Cryptography',
    cat: 'أمن وحماية',
    year: 'الرابعة',
    icon: '🔒',
    color: '#ff6fae',
    art: 'classes',
    desc: 'مبادئ حماية الأنظمة الرقمية والشبكات، خوارزميات التشفير المتماثل وغير المتماثل، التواقيع الرقمية، واكتشاف الثغرات الأمنية.',
    topics: ['أهداف الأمن الثلاثية (CIA Triad)', 'التشفير المتماثل (AES, DES)', 'التشفير بالمفتاح العام (RSA, ECC)', 'دوال التجزئة والتواقيع الرقمية (SHA, Signatures)', 'أمن الويب وثغرات OWASP Top 10', 'جدران الحماية وبروتوكولات TLS/SSL', 'مفاهيم الاختبار الأمني والاختراق الأخلاقي'],
    resources: [
      { id: 1, title: 'منصة TryHackMe التعليمية العملية', url: 'https://tryhackme.com/', type: 'منصة تدريب', desc: 'مختبرات افتراضية ممتعة لتعلم الأمن الدفاعي والهجومي خطوة بخطوة.' },
      { id: 2, title: 'دليل OWASP لأمن تطبيقات الويب', url: 'https://owasp.org/', type: 'مرجع عالمي', desc: 'المرجع الأول لثغرات الويب مثل SQL Injection و XSS وكيفية الحماية منها.' }
    ],
    comments: [
      { id: 1, author: 'فيصل الحربي', date: '2026-11-03', text: 'لا تبتكر أبداً خوارزمية تشفير خاصة بك للإنتاج، اعتمد دائماً على المكتبات الموثوقة.' }
    ],
    drawing: null
  },
  {
    id: 'software-engineering',
    title: 'هندسة البرمجيات',
    en: 'Software Engineering',
    cat: 'أساسيات وتطوير',
    year: 'الثالثة',
    icon: '📐',
    color: '#5eead4',
    art: 'classes',
    desc: 'منهجيات بناء البرمجيات الضخمة بجودة عالية: دورة حياة البرمجيات، النمذجة بـ UML، أنماط التصميم المعمارية، ومبادئ SOLID.',
    topics: ['منهجيات أجايل وسكروم (Agile & Scrum)', 'أنماط التصميم البرمجية (Design Patterns - GoF)', 'مبادئ البرمجة الكائنية النظيفة (SOLID Principles)', 'هندسة المتطلبات ونمذجة النظام (UML Diagrams)', 'اختبار البرمجيات وضمان الجودة (Unit Testing & CI/CD)', 'إدارة الإصدارات والعمل الجماعي بـ Git'],
    resources: [
      { id: 1, title: 'موقع Refactoring.Guru لأنماط التصميم', url: 'https://refactoring.guru/', type: 'موقع تعليمي', desc: 'شروحات مصورة ورائعة لجميع أنماط التصميم (Singleton, Factory, Observer).' },
      { id: 2, title: 'كتاب Clean Code للمؤلف روبرت مارتن', url: 'https://www.oreilly.com/', type: 'كتاب', desc: 'الكتاب الأهم لتعلم كتابة كود برمجى مقروء وقابل للصيانة والتطوير.' }
    ],
    comments: [
      { id: 1, author: 'جمال الشامي', date: '2026-10-12', text: 'تطبيق مبادئ SOLID يوفر ساعات طويلة من التصحيح وإعادة الكتابة لاحقاً.' }
    ],
    drawing: null
  },
  {
    id: 'programming-fundamentals',
    title: 'أساسيات البرمجة وحل المشكلات',
    en: 'Programming Fundamentals',
    cat: 'أساسيات وتطوير',
    year: 'الأولى',
    icon: '💻',
    color: '#ffd37a',
    art: 'flow',
    desc: 'اللبنة الأولى في علم الحاسوب: التفكير المنطقي، المتغيرات، الجمل الشرطية، الحلقات، الدوال، وإدارة الذاكرة والمؤشرات.',
    topics: ['أنواع البيانات والمتغيرات والعمليات', 'التحكم بالتدفق (if/else, switch)', 'حلقات التكرار (for, while)', 'الدوال والمجال وتمرير المعاملات', 'المؤشرات والتعامل مع الذاكرة (Pointers)', 'الاستدعاء الذاتي (Recursion)', 'البرمجة الإجرائية والمبسطة'],
    resources: [
      { id: 1, title: 'دورة CS50x التمهيدية في علوم الحاسوب', url: 'https://cs50.harvard.edu/x/', type: 'كورس عالمي', desc: 'أفضل مدخل في العالم لتعلم التفكير الحاسوبي والبرمجة وحل المشكلات.' },
      { id: 2, title: 'منصة HackerRank لمسائل المبتدئين', url: 'https://www.hackerrank.com/', type: 'تمارين تفاعلية', desc: 'تمارين تدريجية لصقل المهارة البرمجية واختبار فهمك للحلقات والدوال.' }
    ],
    comments: [
      { id: 1, author: 'رنا العلي', date: '2026-09-25', text: 'لا تستعجل الانتقال إلى الأطر المتقدمة قبل أن تتقن حل المشكلات البرمجية بلغة بسيطة.' }
    ],
    drawing: null
  },
  {
    id: 'cloud-computing',
    title: 'الحوسبة السحابية والنظم الموزعة',
    en: 'Cloud & Distributed Systems',
    cat: 'أنظمة وشبكات',
    year: 'الرابعة',
    icon: '☁️',
    color: '#8fb4ff',
    art: 'layers',
    desc: 'معمارية التطبيقات واسعة النطاق: الحاويات (Docker)، إدارة الخدمات (Kubernetes)، الحوسبة السحابية (AWS/Azure)، ونظرية CAP.',
    topics: ['مفاهيم الحوسبة السحابية (IaaS, PaaS, SaaS)', 'الحاويات الافتراضية باستخدام Docker', 'تنسيق الحاويات عبر Kubernetes', 'معمارية الخدمات المصغرة (Microservices)', 'نظرية CAP والتوافقية في النظم الموزعة', 'موازنة الأحمال وقابلية التوسع (Load Balancing & Auto-scaling)'],
    resources: [
      { id: 1, title: 'كتاب Designing Data-Intensive Applications (DDIA)', url: 'https://dataintensive.net/', type: 'كتاب قياسي', desc: 'الكتاب الذهبي لكل مهندس برمجيات ونظم لفهم تخزين ومعالجة البيانات الموزعة.' },
      { id: 2, title: 'دورات ومختبرات KodeKloud العملية', url: 'https://kodekloud.com/', type: 'مختبرات سحابية', desc: 'تدريب تفاعلي مباشر على أوامر Docker و Kubernetes في متصفحك.' }
    ],
    comments: [
      { id: 1, author: 'طارق حسام', date: '2026-11-05', text: 'فهم نظرية CAP يساعدك في اختيار نوع قاعدة البيانات المناسب لطبيعة مشروعك.' }
    ],
    drawing: null
  },
  {
    id: 'theory-of-computation',
    title: 'نظرية الاحتساب والمترجمات',
    en: 'Theory of Computation & Automata',
    cat: 'أساسيات وتطوير',
    year: 'الثالثة',
    icon: '📜',
    color: '#d4c8ff',
    art: 'net',
    desc: 'الأسس الرياضية لقابلية الحساب واللغات الصورية: آلات الحالة المنتهية، آلات تورنغ، وتحليل قواعد اللغات وبناء المترجمات.',
    topics: ['آلات الحالة المنتهية (DFA & NFA)', 'التعابير النمطية واللغات المنتظمة (Regular Languages)', 'القواعد الخالية من السياق (Context-Free Grammars)', 'آلات تورنغ وحدود الحوسبة (Turing Machines)', 'مسألة التوقف (The Halting Problem)', 'مراحل المترجم (Lexical & Syntax Analysis)'],
    resources: [
      { id: 1, title: 'كتاب Michael Sipser في نظرية الاحتساب', url: 'http://math.mit.edu/~sipser/', type: 'كتاب أكاديمي', desc: 'المرجع الأوضح والأنقى في إثبات قدرات وحدود الحواسيب النظرية.' },
      { id: 2, title: 'شروحات Neso Academy في نظرية الآلات', url: 'https://www.youtube.com/@nesoacademy', type: 'يوتيوب', desc: 'سلسلة فيديو تفصيلية ومثالية لرسم آلات DFA وتحويل NFA خطوة بخطوة.' }
    ],
    comments: [
      { id: 1, author: 'كريم البصري', date: '2026-10-08', text: 'هذه المادة تجعلك تدرك أن هناك مشكلات رياضية يستحيل على أي حاسوب حلها مهما بلغت قوته.' }
    ],
    drawing: null
  }
];

/* ====================================================================
   إدارة الحالة العامة للتطبيق (Application Global State)
   ==================================================================== */
const State = {
  subjects: [],
  selectedCategory: 'الكل',
  searchQuery: '',
  activeSubjectId: null,
  activeTab: 'overview',
  theme: 'dark',
  drawingColor: '#ffd666',
  drawingSize: 3,
  isDrawing: false,
  drawCanvasCtx: null
};

/**
 * تحميل البيانات المحفوظة من التخزين المحلي أو الاعتماد على البيانات الأولية
 */
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DATA);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        State.subjects = parsed;
        return;
      }
    }
  } catch (err) {
    console.warn('تعذر تحميل البيانات من التخزين المحلي، سيتم استخدام البيانات الافتراضية:', err);
  }
  State.subjects = JSON.parse(JSON.stringify(INITIAL_SUBJECTS));
  saveData();
}

/**
 * حفظ البيانات في التخزين المحلي وتحديث العدادات
 */
function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(State.subjects));
  } catch (err) {
    console.error('خطأ أثناء حفظ البيانات في التخزين المحلي:', err);
  }
  updateStatsCounters();
}

/* ====================================================================
   2. التحكم بالمظهر (الوضع الليلي والنهاري وتأثير المسح الدائري Wipe)
   ==================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    State.theme = savedTheme;
  } else {
    // التحقق من تفضيلات النظام التشغيلي
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    State.theme = prefersDark ? 'dark' : 'light';
  }
  applyTheme(State.theme, false);

  const themeBtn = document.getElementById('theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
      toggleTheme(e);
    });
  }
}

function applyTheme(themeName, animate = true) {
  State.theme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  try {
    localStorage.setItem(STORAGE_KEY_THEME, themeName);
  } catch (e) {}

  // إعادة رسم سماء النجوم بما يناسب الوضع
  if (typeof drawStarryNight === 'function') {
    requestAnimationFrame(drawStarryNight);
  }
}

function toggleTheme(event) {
  const nextTheme = State.theme === 'dark' ? 'light' : 'dark';

  // إضافة تأثير التموج الدائري البصري (Wipe Ripple Effect)
  if (event && event.clientX) {
    const wipe = document.createElement('div');
    wipe.className = 'wipe';
    wipe.style.left = event.clientX + 'px';
    wipe.style.top = event.clientY + 'px';
    wipe.style.backgroundColor = nextTheme === 'light' ? '#f6efd9' : '#0a1233';
    document.body.appendChild(wipe);

    setTimeout(() => {
      wipe.remove();
    }, 950);
  }

  applyTheme(nextTheme, true);
}

/* ====================================================================
   3. سماء ليلة النجوم الفلكية والنجوم المتحركة (Starry Night & Sky Canvas)
   ==================================================================== */
let skyCanvas, skyCtx;
let starCanvas, starCtx;
let starsList = [];
let shootingStars = [];

function initCosmicCanvas() {
  skyCanvas = document.getElementById('sky');
  starCanvas = document.getElementById('sk');

  if (!skyCanvas || !starCanvas) return;

  skyCtx = skyCanvas.getContext('2d');
  starCtx = starCanvas.getContext('2d');

  function resizeCanvases() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const w = hero.clientWidth + 50;
    const h = hero.clientHeight + 50;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    skyCanvas.width = w * dpr;
    skyCanvas.height = h * dpr;
    skyCanvas.style.width = w + 'px';
    skyCanvas.style.height = h + 'px';
    skyCtx.scale(dpr, dpr);

    starCanvas.width = hero.clientWidth * dpr;
    starCanvas.height = hero.clientHeight * dpr;
    starCanvas.style.width = hero.clientWidth + 'px';
    starCanvas.style.height = hero.clientHeight + 'px';
    starCtx.scale(dpr, dpr);

    generateStars(hero.clientWidth, hero.clientHeight);
    drawStarryNight();
  }

  window.addEventListener('resize', debounce(resizeCanvases, 200));
  resizeCanvases();
  animateStars();
}

/**
 * رسم ضربات الفرشاة الحلزونية التعبيرية المستوحاة من لوحة "ليلة النجوم" لفان غوخ
 */
function drawStarryNight() {
  if (!skyCtx || !skyCanvas) return;
  const w = parseFloat(skyCanvas.style.width) || 1200;
  const h = parseFloat(skyCanvas.style.height) || 500;

  skyCtx.clearRect(0, 0, w, h);

  const isLight = State.theme === 'light';
  const baseGrad = skyCtx.createLinearGradient(0, 0, w, h);

  if (isLight) {
    baseGrad.addColorStop(0, '#3b82d4');
    baseGrad.addColorStop(0.5, '#79b8ea');
    baseGrad.addColorStop(1, '#fad77b');
  } else {
    baseGrad.addColorStop(0, '#040b24');
    baseGrad.addColorStop(0.4, '#0e2363');
    baseGrad.addColorStop(0.85, '#173c88');
    baseGrad.addColorStop(1, '#0c1a47');
  }
  skyCtx.fillStyle = baseGrad;
  skyCtx.fillRect(0, 0, w, h);

  // رسم تيارات الرياح والسحب الكونية اللولبية (Cosmic Swirls)
  const swirls = [
    { cx: w * 0.42, cy: h * 0.38, r: Math.min(w, h) * 0.32, angleStart: 0.2, angleEnd: 4.8 },
    { cx: w * 0.65, cy: h * 0.3, r: Math.min(w, h) * 0.22, angleStart: 1.0, angleEnd: 5.2 },
    { cx: w * 0.25, cy: h * 0.45, r: Math.min(w, h) * 0.26, angleStart: 0.5, angleEnd: 4.2 }
  ];

  skyCtx.save();
  swirls.forEach((sw, idx) => {
    const strokeCount = 36;
    for (let i = 0; i < strokeCount; i++) {
      const radius = sw.r * (0.3 + (i / strokeCount) * 0.7);
      skyCtx.beginPath();
      skyCtx.arc(sw.cx, sw.cy, radius, sw.angleStart, sw.angleEnd, false);

      const alpha = isLight ? 0.08 : (0.12 + (i % 3) * 0.05);
      const strokeColor = (i % 2 === 0) 
        ? (isLight ? `rgba(255, 235, 150, ${alpha})` : `rgba(244, 197, 66, ${alpha})`)
        : (isLight ? `rgba(255, 255, 255, ${alpha})` : `rgba(111, 176, 255, ${alpha})`);

      skyCtx.strokeStyle = strokeColor;
      skyCtx.lineWidth = 4 + (i % 4) * 2;
      skyCtx.lineCap = 'round';
      skyCtx.setLineDash([12 + (i % 6) * 4, 8 + (i % 3) * 3]);
      skyCtx.stroke();
    }
  });
  skyCtx.restore();
}

/**
 * توليد مصفوفة النجوم المتلألئة
 */
function generateStars(w, h) {
  starsList = [];
  const count = Math.floor((w * h) / 4500);
  for (let i = 0; i < count; i++) {
    starsList.push({
      x: Math.random() * w,
      y: Math.random() * h * 0.85,
      r: Math.random() * 1.8 + 0.6,
      alpha: Math.random(),
      speed: Math.random() * 0.03 + 0.01,
      color: Math.random() > 0.4 ? '#ffffff' : (Math.random() > 0.5 ? '#ffd666' : '#8fc3ff')
    });
  }
}

/**
 * تحريك النجوم وتوليد الشهب
 */
function animateStars() {
  if (!starCtx || !starCanvas) return;
  const w = parseFloat(starCanvas.style.width) || 1200;
  const h = parseFloat(starCanvas.style.height) || 500;

  starCtx.clearRect(0, 0, w, h);

  // تحديث ورسم النجوم المتلألئة
  for (let i = 0; i < starsList.length; i++) {
    const s = starsList[i];
    s.alpha += s.speed;
    if (s.alpha > 1 || s.alpha < 0.15) {
      s.speed = -s.speed;
    }

    starCtx.beginPath();
    starCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    starCtx.fillStyle = s.color;
    starCtx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
    starCtx.fill();
  }

  // إطلاق شهاب بين الحين والآخر
  if (Math.random() < 0.015 && shootingStars.length < 2) {
    shootingStars.push({
      x: Math.random() * w * 0.8 + w * 0.1,
      y: Math.random() * h * 0.3,
      length: Math.random() * 90 + 60,
      speed: Math.random() * 7 + 8,
      angle: (Math.PI / 180) * (30 + Math.random() * 15),
      life: 1.0
    });
  }

  // رسم وتحريك الشهب
  for (let j = shootingStars.length - 1; j >= 0; j--) {
    const sh = shootingStars[j];
    sh.x -= Math.cos(sh.angle) * sh.speed;
    sh.y += Math.sin(sh.angle) * sh.speed;
    sh.life -= 0.025;

    if (sh.life <= 0) {
      shootingStars.splice(j, 1);
      continue;
    }

    const tailX = sh.x + Math.cos(sh.angle) * sh.length;
    const tailY = sh.y - Math.sin(sh.angle) * sh.length;

    const grad = starCtx.createLinearGradient(sh.x, sh.y, tailX, tailY);
    grad.addColorStop(0, `rgba(255, 255, 255, ${sh.life})`);
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    starCtx.beginPath();
    starCtx.moveTo(sh.x, sh.y);
    starCtx.lineTo(tailX, tailY);
    starCtx.strokeStyle = grad;
    starCtx.lineWidth = 2.2;
    starCtx.lineCap = 'round';
    starCtx.globalAlpha = sh.life;
    starCtx.stroke();
  }

  starCtx.globalAlpha = 1;
  requestAnimationFrame(animateStars);
}

/* ====================================================================
   4. تأثير الإمالة ثلاثي الأبعاد والبارالاكس (3D Parallax & Mouse Track)
   ==================================================================== */
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  let targetPx = 0, targetPy = 0;
  let currentPx = 0, currentPy = 0;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetPx = (x / rect.width - 0.5) * 2;
    targetPy = (y / rect.height - 0.5) * 2;
  });

  hero.addEventListener('mouseleave', () => {
    targetPx = 0;
    targetPy = 0;
  });

  function updateParallax() {
    currentPx += (targetPx - currentPx) * 0.08;
    currentPy += (targetPy - currentPy) * 0.08;

    hero.style.setProperty('--px', currentPx.toFixed(3));
    hero.style.setProperty('--py', currentPy.toFixed(3));

    requestAnimationFrame(updateParallax);
  }
  updateParallax();
}

/* ====================================================================
   5. محاكي الحاسوب المحمول والشيفرات البرمجية (3D Laptop Typer)
   ==================================================================== */
const CODE_SNIPPETS = [
  {
    title: 'dijkstra.py — CS Hub',
    lines: [
      '<span class="k">def</span> <span class="f">dijkstra</span>(graph, start):',
      '    dist = {v: <span class="k">float</span>(<span class="s">"inf"</span>) <span class="k">for</span> v <span class="k">in</span> graph}',
      '    dist[start] = <span class="n">0</span>',
      '    pq = [(<span class="n">0</span>, start)]',
      '    <span class="k">while</span> pq:',
      '        d, u = heapq.heappop(pq)',
      '        <span class="c"># Finding shortest paths...</span>',
      '    <span class="k">return</span> dist'
    ],
    output: 'Shortest paths calculated: A -> F in 0.04ms ✅'
  },
  {
    title: 'binary_search.py — CS Hub',
    lines: [
      '<span class="k">def</span> <span class="f">binary_search</span>(arr, target):',
      '    low, high = <span class="n">0</span>, <span class="k">len</span>(arr) - <span class="n">1</span>',
      '    <span class="k">while</span> low &lt;= high:',
      '        mid = (low + high) // <span class="n">2</span>',
      '        <span class="k">if</span> arr[mid] == target:',
      '            <span class="k">return</span> mid  <span class="c"># O(log n)</span>',
      '        <span class="k">elif</span> arr[mid] &lt; target: low = mid + <span class="n">1</span>',
      '        <span class="k">else</span>: high = mid - <span class="n">1</span>'
    ],
    output: 'Target value 42 found at index 7 ⚡'
  },
  {
    title: 'neural_net.py — CS Hub',
    lines: [
      '<span class="k">def</span> <span class="f">forward_pass</span>(X, W1, b1, W2, b2):',
      '    <span class="c"># Hidden layer with ReLU</span>',
      '    z1 = np.dot(X, W1) + b1',
      '    a1 = np.maximum(<span class="n">0</span>, z1)',
      '    <span class="c"># Output layer with Softmax</span>',
      '    z2 = np.dot(a1, W2) + b2',
      '    exp_z = np.exp(z2 - np.max(z2))',
      '    <span class="k">return</span> exp_z / exp_z.sum()'
    ],
    output: 'Forward pass complete: Accuracy = 98.4% 🧠'
  },
  {
    title: 'quicksort.py — CS Hub',
    lines: [
      '<span class="k">def</span> <span class="f">quicksort</span>(arr):',
      '    <span class="k">if</span> <span class="k">len</span>(arr) &lt;= <span class="n">1</span>: <span class="k">return</span> arr',
      '    pivot = arr[<span class="k">len</span>(arr) // <span class="n">2</span>]',
      '    left = [x <span class="k">for</span> x <span class="k">in</span> arr <span class="k">if</span> x &lt; pivot]',
      '    mid  = [x <span class="k">for</span> x <span class="k">in</span> arr <span class="k">if</span> x == pivot]',
      '    right = [x <span class="k">for</span> x <span class="k">in</span> arr <span class="k">if</span> x &gt; pivot]',
      '    <span class="k">return</span> quicksort(left) + mid + quicksort(right)'
    ],
    output: 'Sorted 100,000 items in 14.2ms 📊'
  }
];

let currentSnippetIdx = 0;
let laptopTypingTimeout = null;

function initLaptopCode() {
  const pc = document.getElementById('pc');
  const codeContainer = document.getElementById('code');
  const pout = document.getElementById('pout');
  const tbTitle = document.querySelector('.tb span');

  if (!pc || !codeContainer || !pout) return;

  function runSnippet(idx) {
    if (laptopTypingTimeout) clearTimeout(laptopTypingTimeout);
    const snip = CODE_SNIPPETS[idx % CODE_SNIPPETS.length];
    if (tbTitle) tbTitle.textContent = snip.title;

    codeContainer.innerHTML = '';
    pout.textContent = 'executing...';

    let lineIdx = 0;

    function typeNextLine() {
      if (lineIdx < snip.lines.length) {
        // إزالة مؤشر الكتابة النشط من السطر السابق
        const prevActive = codeContainer.querySelector('.ln.act');
        if (prevActive) prevActive.classList.remove('act');

        const lineDiv = document.createElement('div');
        lineDiv.className = 'ln act';
        lineDiv.innerHTML = snip.lines[lineIdx];
        codeContainer.appendChild(lineDiv);

        lineIdx++;
        laptopTypingTimeout = setTimeout(typeNextLine, 220);
      } else {
        // انتهت كتابة الأسطر، إظهار نتيجة التشغيل
        const prevActive = codeContainer.querySelector('.ln.act');
        if (prevActive) prevActive.classList.remove('act');

        pout.textContent = snip.output;
        // الانتظار ثم الانتقال التلقائي للشيفرة التالية
        laptopTypingTimeout = setTimeout(() => {
          currentSnippetIdx++;
          runSnippet(currentSnippetIdx);
        }, 5500);
      }
    }

    typeNextLine();
  }

  // عند الضغط على الحاسوب: تفعيل وميض الخلل (Glitch) والتبديل فوراً للشيفرة التالية
  pc.addEventListener('click', () => {
    pc.classList.add('gl');
    setTimeout(() => pc.classList.remove('gl'), 400);
    currentSnippetIdx++;
    runSnippet(currentSnippetIdx);
  });

  runSnippet(0);
}

/* ====================================================================
   6. محرك توليد المخططات البيانية SVG (Interactive Diagram Generators)
   ==================================================================== */
const DiagramSVGs = {
  // شجرة بيانات ثنائية (Binary Tree)
  tree: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="120" y1="28" x2="65" y2="72" stroke="#5b4bff" stroke-width="${isThumb ? '2' : '2.5'}" stroke-dasharray="3 3"/>
      <line x1="120" y1="28" x2="175" y2="72" stroke="#5b4bff" stroke-width="${isThumb ? '2' : '2.5'}"/>
      <line x1="65" y1="72" x2="35" y2="114" stroke="#00c2a8" stroke-width="${isThumb ? '2' : '2.5'}"/>
      <line x1="65" y1="72" x2="95" y2="114" stroke="#00c2a8" stroke-width="${isThumb ? '2' : '2.5'}"/>
      <line x1="175" y1="72" x2="145" y2="114" stroke="#00c2a8" stroke-width="${isThumb ? '2' : '2.5'}"/>
      <line x1="175" y1="72" x2="205" y2="114" stroke="#00c2a8" stroke-width="${isThumb ? '2' : '2.5'}"/>
      
      <circle cx="120" cy="28" r="15" fill="#5b4bff" filter="drop-shadow(0 0 8px #5b4bff)"/>
      <text x="120" y="33" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">50</text>
      
      <circle cx="65" cy="72" r="13" fill="#3b82f6"/>
      <text x="65" y="76" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">25</text>
      
      <circle cx="175" cy="72" r="13" fill="#3b82f6"/>
      <text x="175" y="76" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">75</text>
      
      <circle cx="35" cy="114" r="11" fill="#00c2a8"/>
      <text x="35" y="118" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">12</text>
      <circle cx="95" cy="114" r="11" fill="#00c2a8"/>
      <text x="95" y="118" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">37</text>
      <circle cx="145" cy="114" r="11" fill="#00c2a8"/>
      <text x="145" y="118" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">62</text>
      <circle cx="205" cy="114" r="11" fill="#00c2a8"/>
      <text x="205" y="118" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">88</text>
    </svg>`,

  // شبكة / رسم بياني (Graph / Network)
  net: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="40" x2="120" y2="30" stroke="#7c5cff" stroke-width="2"/>
      <line x1="50" y1="40" x2="80" y2="105" stroke="#7c5cff" stroke-width="2"/>
      <line x1="120" y1="30" x2="190" y2="45" stroke="#7c5cff" stroke-width="2"/>
      <line x1="120" y1="30" x2="140" y2="95" stroke="#00c2a8" stroke-width="2.5"/>
      <line x1="80" y1="105" x2="140" y2="95" stroke="#7c5cff" stroke-width="2"/>
      <line x1="140" y1="95" x2="190" y2="45" stroke="#7c5cff" stroke-width="2"/>
      <line x1="140" y1="95" x2="200" y2="110" stroke="#ff7ad9" stroke-width="2"/>
      <line x1="190" y1="45" x2="200" y2="110" stroke="#7c5cff" stroke-width="2"/>

      <circle cx="50" cy="40" r="13" fill="#7c5cff"/>
      <text x="50" y="44" fill="#fff" font-size="9" text-anchor="middle">A</text>
      <circle cx="120" cy="30" r="13" fill="#5b4bff"/>
      <text x="120" y="34" fill="#fff" font-size="9" text-anchor="middle">B</text>
      <circle cx="190" cy="45" r="13" fill="#7c5cff"/>
      <text x="190" y="49" fill="#fff" font-size="9" text-anchor="middle">C</text>
      <circle cx="80" cy="105" r="13" fill="#3b82f6"/>
      <text x="80" y="109" fill="#fff" font-size="9" text-anchor="middle">D</text>
      <circle cx="140" cy="95" r="15" fill="#00c2a8" filter="drop-shadow(0 0 6px #00c2a8)"/>
      <text x="140" y="99" fill="#061a28" font-size="9" font-weight="bold" text-anchor="middle">E*</text>
      <circle cx="200" cy="110" r="13" fill="#ff7ad9"/>
      <text x="200" y="114" fill="#fff" font-size="9" text-anchor="middle">F</text>
    </svg>`,

  // مخطط انسيابي (Flowchart)
  flow: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Start Oval -->
      <rect x="90" y="12" width="60" height="22" rx="11" fill="#4ade80"/>
      <text x="120" y="26" fill="#052814" font-size="9" font-weight="bold" text-anchor="middle">Start</text>
      <line x1="120" y1="34" x2="120" y2="48" stroke="#cfd6ff" stroke-width="2" marker-end="url(#arr)"/>

      <!-- Decision Diamond -->
      <polygon points="120,48 155,70 120,92 85,70" fill="#f4c542"/>
      <text x="120" y="73" fill="#2b1c00" font-size="8" font-weight="bold" text-anchor="middle">x &gt; 0 ?</text>

      <!-- Yes Path -->
      <line x1="155" y1="70" x2="185" y2="70" stroke="#4ade80" stroke-width="2"/>
      <rect x="185" y="58" width="45" height="24" rx="4" fill="#3b82f6"/>
      <text x="207" y="73" fill="#fff" font-size="8" text-anchor="middle">Do Work</text>

      <!-- No Path Down -->
      <line x1="120" y1="92" x2="120" y2="108" stroke="#ff6fae" stroke-width="2"/>
      <!-- End Oval -->
      <rect x="90" y="108" width="60" height="22" rx="11" fill="#ef4444"/>
      <text x="120" y="122" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">Return</text>
    </svg>`,

  // أصناف وكائنات (OOP Classes)
  classes: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Base Class Box -->
      <rect x="75" y="10" width="90" height="48" rx="6" fill="#1b2a6b" stroke="#6fa8ff" stroke-width="1.5"/>
      <rect x="75" y="10" width="90" height="18" rx="6" fill="#263d99"/>
      <text x="120" y="23" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">&lt;&lt;User&gt;&gt;</text>
      <text x="82" y="38" fill="#cfd6ff" font-size="7.5">+ id: int</text>
      <text x="82" y="48" fill="#cfd6ff" font-size="7.5">+ login(): bool</text>

      <!-- Inheritance Lines -->
      <line x1="120" y1="58" x2="120" y2="78" stroke="#ffd666" stroke-width="1.5"/>
      <line x1="60" y1="78" x2="180" y2="78" stroke="#ffd666" stroke-width="1.5"/>
      <line x1="60" y1="78" x2="60" y2="92" stroke="#ffd666" stroke-width="1.5"/>
      <line x1="180" y1="78" x2="180" y2="92" stroke="#ffd666" stroke-width="1.5"/>

      <!-- Subclass Admin -->
      <rect x="20" y="92" width="80" height="40" rx="5" fill="#17224d" stroke="#5eead4" stroke-width="1.5"/>
      <text x="60" y="105" fill="#5eead4" font-size="8.5" font-weight="bold" text-anchor="middle">Admin</text>
      <text x="26" y="122" fill="#cfd6ff" font-size="7.5">+ banUser()</text>

      <!-- Subclass Student -->
      <rect x="140" y="92" width="80" height="40" rx="5" fill="#17224d" stroke="#ff7ad9" stroke-width="1.5"/>
      <text x="180" y="105" fill="#ff7ad9" font-size="8.5" font-weight="bold" text-anchor="middle">Student</text>
      <text x="146" y="122" fill="#cfd6ff" font-size="7.5">+ enroll()</text>
    </svg>`,

  // أعمدة وترتيب (Sorting Bars)
  sort: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="90" width="18" height="38" rx="4" fill="#60a5fa"/>
      <rect x="50" y="70" width="18" height="58" rx="4" fill="#60a5fa"/>
      <rect x="75" y="45" width="18" height="83" rx="4" fill="#f59e0b" filter="drop-shadow(0 0 4px #f59e0b)"/>
      <rect x="100" y="105" width="18" height="23" rx="4" fill="#60a5fa"/>
      <rect x="125" y="25" width="18" height="103" rx="4" fill="#10b981" filter="drop-shadow(0 0 4px #10b981)"/>
      <rect x="150" y="60" width="18" height="68" rx="4" fill="#60a5fa"/>
      <rect x="175" y="35" width="18" height="93" rx="4" fill="#60a5fa"/>
      <rect x="200" y="15" width="18" height="113" rx="4" fill="#10b981"/>

      <path d="M 84 38 L 84 22 L 134 22 L 134 18" stroke="#ffd666" stroke-width="2" fill="none"/>
      <polygon points="134,14 139,22 129,22" fill="#ffd666"/>
      <text x="120" y="136" fill="#94a3b8" font-size="8" text-anchor="middle">QuickSort Partition [Pivot]</text>
    </svg>`,

  // طبقات وهيكلية (Architecture Layers)
  layers: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="12" width="170" height="20" rx="5" fill="#6366f1"/>
      <text x="120" y="26" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">7. Application (HTTP/DNS)</text>

      <rect x="35" y="38" width="170" height="20" rx="5" fill="#3b82f6"/>
      <text x="120" y="52" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">4. Transport (TCP / UDP)</text>

      <rect x="35" y="64" width="170" height="20" rx="5" fill="#0284c7"/>
      <text x="120" y="78" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">3. Network (IP Routing)</text>

      <rect x="35" y="90" width="170" height="20" rx="5" fill="#0d9488"/>
      <text x="120" y="104" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">2. Data Link (Ethernet/WiFi)</text>

      <rect x="35" y="116" width="170" height="18" rx="5" fill="#059669"/>
      <text x="120" y="129" fill="#fff" font-size="8.5" font-weight="bold" text-anchor="middle">1. Physical (Signals / Fiber)</text>
    </svg>`,

  // جدول بيانات (Database Table)
  table: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="190" height="110" rx="8" fill="#0f172a" stroke="#00c2a8" stroke-width="1.5"/>
      <rect x="25" y="15" width="190" height="28" rx="8" fill="#0e3a47"/>
      <text x="38" y="33" fill="#ffd666" font-size="8.5" font-weight="bold">🔑 id</text>
      <text x="95" y="33" fill="#fff" font-size="8.5" font-weight="bold">name</text>
      <text x="160" y="33" fill="#fff" font-size="8.5" font-weight="bold">role</text>

      <line x1="25" y1="43" x2="215" y2="43" stroke="#00c2a8" stroke-width="1"/>
      <line x1="80" y1="15" x2="80" y2="125" stroke="#1e293b" stroke-width="1"/>
      <line x1="145" y1="15" x2="145" y2="125" stroke="#1e293b" stroke-width="1"/>

      <text x="42" y="65" fill="#94a3b8" font-size="8">1</text>
      <text x="92" y="65" fill="#e2e8f0" font-size="8">Al-Khwarizmi</text>
      <text x="155" y="65" fill="#38bdf8" font-size="8">Admin</text>

      <line x1="25" y1="76" x2="215" y2="76" stroke="#1e293b" stroke-width="1"/>
      <text x="42" y="98" fill="#94a3b8" font-size="8">2</text>
      <text x="92" y="98" fill="#e2e8f0" font-size="8">Ada Lovelace</text>
      <text x="155" y="98" fill="#4ade80" font-size="8">Engineer</text>

      <line x1="25" y1="106" x2="215" y2="106" stroke="#1e293b" stroke-width="1"/>
    </svg>`,

  // شبكة عصبية اصطناعية (Neural Network)
  nn: (isThumb = false) => `
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Synaptic Connections -->
      <line x1="45" y1="35" x2="120" y2="25" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>
      <line x1="45" y1="35" x2="120" y2="60" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>
      <line x1="45" y1="35" x2="120" y2="95" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>
      <line x1="45" y1="70" x2="120" y2="25" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>
      <line x1="45" y1="70" x2="120" y2="60" stroke="#8b5cf6" stroke-width="1.5" opacity="0.9"/>
      <line x1="45" y1="70" x2="120" y2="95" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>
      <line x1="45" y1="105" x2="120" y2="25" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>
      <line x1="45" y1="105" x2="120" y2="60" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>
      <line x1="45" y1="105" x2="120" y2="95" stroke="#8b5cf6" stroke-width="1.2" opacity="0.6"/>

      <line x1="120" y1="25" x2="195" y2="48" stroke="#00c2a8" stroke-width="1.5"/>
      <line x1="120" y1="60" x2="195" y2="48" stroke="#00c2a8" stroke-width="2"/>
      <line x1="120" y1="95" x2="195" y2="48" stroke="#00c2a8" stroke-width="1.2"/>
      <line x1="120" y1="25" x2="195" y2="92" stroke="#00c2a8" stroke-width="1.2"/>
      <line x1="120" y1="60" x2="195" y2="92" stroke="#00c2a8" stroke-width="1.5"/>
      <line x1="120" y1="95" x2="195" y2="92" stroke="#00c2a8" stroke-width="2"/>

      <!-- Input Layer (3) -->
      <circle cx="45" cy="35" r="9" fill="#3b82f6"/>
      <circle cx="45" cy="70" r="9" fill="#3b82f6"/>
      <circle cx="45" cy="105" r="9" fill="#3b82f6"/>

      <!-- Hidden Layer (3) -->
      <circle cx="120" cy="25" r="10" fill="#8b5cf6"/>
      <circle cx="120" cy="60" r="11" fill="#ec4899" filter="drop-shadow(0 0 6px #ec4899)"/>
      <circle cx="120" cy="95" r="10" fill="#8b5cf6"/>

      <!-- Output Layer (2) -->
      <circle cx="195" cy="48" r="11" fill="#10b981" filter="drop-shadow(0 0 6px #10b981)"/>
      <text x="195" y="52" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">y1</text>
      <circle cx="195" cy="92" r="10" fill="#00c2a8"/>
      <text x="195" y="96" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">y2</text>
    </svg>`
};

/**
 * دالة مساعدة لجلب SVG حسب نوع المخطط
 */
function getDiagramSvg(type, isThumb = false) {
  const gen = DiagramSVGs[type] || DiagramSVGs.tree;
  return gen(isThumb);
}

/* ====================================================================
   7. لوحة الرسم والملاحظات المرئية التفاعلية (Drawing Canvas & Palette)
   ==================================================================== */
function setupDrawingBoard(subject) {
  const canvas = document.getElementById('drw');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  State.drawCanvasCtx = ctx;

  // ضبط أبعاد الكانفاس لتتناسب بدقة مع العرض الفعلي
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // تحميل الرسمة المحفوظة سابقاً إن وجدت
  if (subject && subject.drawing) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, rect.width, rect.height);
    };
    img.src = subject.drawing;
  }

  // أحداث الفأرة واللمس
  let isDown = false;
  let lastX = 0, lastY = 0;

  function getPos(e) {
    const r = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - r.left,
      y: clientY - r.top
    };
  }

  function startDraw(e) {
    e.preventDefault();
    isDown = true;
    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;
  }

  function drawMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const pos = getPos(e);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = State.drawingColor;
    ctx.lineWidth = State.drawingSize;
    ctx.stroke();

    lastX = pos.x;
    lastY = pos.y;
  }

  function endDraw() {
    if (!isDown) return;
    isDown = false;
    // حفظ الرسمة الحالية في بيانات المادة
    if (subject) {
      subject.drawing = canvas.toDataURL();
      saveData();
    }
  }

  canvas.onmousedown = startDraw;
  canvas.onmousemove = drawMove;
  window.onmouseup = endDraw;

  canvas.ontouchstart = startDraw;
  canvas.ontouchmove = drawMove;
  canvas.ontouchend = endDraw;

  // إعداد باليتة الألوان
  const paletteBtns = document.querySelectorAll('.pcol');
  paletteBtns.forEach((btn) => {
    btn.onclick = () => {
      paletteBtns.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      State.drawingColor = btn.dataset.col;
    };
  });

  // زر مسح اللوحة
  const clearBtn = document.getElementById('clearDrw');
  if (clearBtn) {
    clearBtn.onclick = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      if (subject) {
        subject.drawing = null;
        saveData();
      }
    };
  }
}

/* ====================================================================
   8. محرك البحث والفلترة والتلميحات الحركية (Search & Autocomplete)
   ==================================================================== */
const SEARCH_HINTS = [
  'ابحث عن: هياكل البيانات...',
  'ابحث عن: خوارزميات الفرز والبحث...',
  'ابحث عن: شبكات الحاسوب وبروتوكول TCP...',
  'ابحث عن: قواعد بيانات SQL و NoSQL...',
  'ابحث عن: الذكاء الاصطناعي وبايثون...',
  'ابحث عن: أمن المعلومات والتشفير...'
];

let hintIdx = 0;
let charIdx = 0;
let isDeletingHint = false;
let hintTimeout = null;

function initSearchEngine() {
  const qInput = document.getElementById('q');
  const phSpan = document.getElementById('ph');
  const sbox = document.getElementById('sbox');
  const sxBtn = document.getElementById('sx');
  const sugBox = document.getElementById('sug');

  if (!qInput || !phSpan) return;

  // تأثير الآلة الكاتبة لنصوص التلميح في مربع البحث
  function tickTypewriter() {
    const currentWord = SEARCH_HINTS[hintIdx % SEARCH_HINTS.length];

    if (isDeletingHint) {
      charIdx--;
      phSpan.textContent = currentWord.substring(0, charIdx);
      if (charIdx <= 0) {
        isDeletingHint = false;
        hintIdx++;
        hintTimeout = setTimeout(tickTypewriter, 450);
        return;
      }
      hintTimeout = setTimeout(tickTypewriter, 40);
    } else {
      charIdx++;
      phSpan.textContent = currentWord.substring(0, charIdx);
      if (charIdx >= currentWord.length) {
        isDeletingHint = true;
        hintTimeout = setTimeout(tickTypewriter, 2600);
        return;
      }
      hintTimeout = setTimeout(tickTypewriter, 90);
    }
  }
  tickTypewriter();

  // الاستماع لحقل البحث المباشر
  qInput.addEventListener('input', () => {
    State.searchQuery = qInput.value.trim().toLowerCase();

    if (State.searchQuery.length > 0) {
      sbox.classList.add('has');
    } else {
      sbox.classList.remove('has');
    }

    renderGrid();
  });

  // زر مسح البحث
  if (sxBtn) {
    sxBtn.addEventListener('click', () => {
      qInput.value = '';
      State.searchQuery = '';
      sbox.classList.remove('has');
      qInput.focus();
      renderGrid();
    });
  }

  // اقتراحات البحث السريعة (Suggestions)
  const SUGGESTIONS = ['خوارزميات', 'بايثون', 'شبكات', 'قواعد بيانات', 'ذكاء اصطناعي', 'هياكل بيانات', 'أمن وحماية', 'C++'];
  if (sugBox) {
    sugBox.innerHTML = '<span>اقتراحات شائعة:</span>' + SUGGESTIONS.map(s => `<button type="button">${s}</button>`).join('');

    sugBox.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'button') {
        const word = e.target.textContent;
        qInput.value = word;
        State.searchQuery = word.toLowerCase();
        sbox.classList.add('has');
        renderGrid();
        // تمرير سلس نحو شبكة المواد
        document.getElementById('grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

/* ====================================================================
   9. إدارة شبكة بطاقات المواد الدراسية (Subjects Grid & Cards Engine)
   ==================================================================== */
function initChips() {
  const chipsContainer = document.getElementById('chips');
  if (!chipsContainer) return;

  // استخراج جميع التصنيفات الفريدة
  const categories = ['الكل', ...new Set(State.subjects.map(s => s.cat))];

  chipsContainer.innerHTML = categories.map(cat => {
    const count = (cat === 'الكل') ? State.subjects.length : State.subjects.filter(s => s.cat === cat).length;
    const isSelected = (cat === State.selectedCategory);
    return `<button class="chip ${isSelected ? 'on' : ''}" data-cat="${cat}">
      <span>${cat}</span>
      <span class="cb">${count}</span>
    </button>`;
  }).join('');

  chipsContainer.onclick = (e) => {
    const chipBtn = e.target.closest('.chip');
    if (!chipBtn) return;

    chipsContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
    chipBtn.classList.add('on');

    State.selectedCategory = chipBtn.dataset.cat;
    renderGrid();
  };
}

/**
 * تظليل النص المطابق للبحث
 */
function highlightText(text, query) {
  if (!query || !text) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

/**
 * تصفية وعرض بطاقات المواد في الشبكة
 */
function renderGrid() {
  const grid = document.getElementById('grid');
  const cnt = document.getElementById('cnt');
  if (!grid) return;

  const q = State.searchQuery;
  const cat = State.selectedCategory;

  // تصفية المواد حسب التصنيف وعبارة البحث
  const filtered = State.subjects.filter(sub => {
    const matchesCat = (cat === 'الكل') || (sub.cat === cat);
    if (!matchesCat) return false;

    if (!q) return true;

    const inTitle = sub.title.toLowerCase().includes(q);
    const inEn = sub.en.toLowerCase().includes(q);
    const inDesc = sub.desc.toLowerCase().includes(q);
    const inYear = sub.year.toLowerCase().includes(q);
    const inTopics = sub.topics && sub.topics.some(t => t.toLowerCase().includes(q));

    return inTitle || inEn || inDesc || inYear || inTopics;
  });

  // تحديث عداد النتائج في شريط البحث
  if (cnt) {
    cnt.textContent = `${filtered.length} مادة`;
  }

  // إذا لم يتم العثور على أي نتائج
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        <div class="astro">🧑‍🚀</div>
        <h3>لم نجد أي مادة مطابقة لبحثك</h3>
        <p>جرّب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً من الأعلى.</p>
      </div>`;
    return;
  }

  // إنشاء البطاقات البرمجية
  grid.innerHTML = filtered.map(sub => {
    const titleHl = highlightText(sub.title, q);
    const enHl = highlightText(sub.en, q);
    const descHl = highlightText(sub.desc, q);
    const thumbSvg = getDiagramSvg(sub.art, true);

    return `
      <article class="card" data-id="${sub.id}" style="--c:${sub.color || '#5b4bff'}">
        <div class="thumb" title="مخطط توضيحي: ${sub.title}">${thumbSvg}</div>
        <div class="ic">${sub.icon || '💻'}</div>
        <h3>${titleHl}</h3>
        <div class="en">${enHl}</div>
        <p>${descHl}</p>
        <div class="meta">
          <span class="tag">السنة ${sub.year}</span>
          <span class="tag">${sub.cat}</span>
          <span class="tag">${sub.resources ? sub.resources.length : 0} مصادر</span>
        </div>
        <div class="wm">${sub.icon || '💻'}</div>
      </article>`;
  }).join('');

  // تأثير الإضاءة الدائرية المتتبعة للفأرة على البطاقات
  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--gx', `${x.toFixed(1)}%`);
      card.style.setProperty('--gy', `${y.toFixed(1)}%`);
    });

    // فتح تفاصيل المادة عند النقر
    card.addEventListener('click', () => {
      openSubjectModal(card.dataset.id);
    });
  });
}

/* ====================================================================
   10. نافذة تفاصيل المادة والتبويبات الداخلية (Details Modal & Tabs)
   ==================================================================== */
function openSubjectModal(subjectId) {
  const dlg = document.getElementById('dlg');
  const dt = document.getElementById('dt');
  const den = document.getElementById('den');
  const tabsContainer = document.getElementById('tabs');
  const body = document.getElementById('body');

  const subject = State.subjects.find(s => s.id === subjectId);
  if (!dlg || !subject) return;

  State.activeSubjectId = subjectId;
  State.activeTab = 'overview';

  dt.textContent = `${subject.icon || '💻'} ${subject.title}`;
  den.textContent = `${subject.en} · السنة ${subject.year} · ${subCatTag(subject.cat)}`;

  function subCatTag(cat) {
    return `<span style="color:var(--accent);font-weight:bold">${cat}</span>`;
  }
  den.innerHTML = `${subject.en} · السنة ${subject.year} · ${subCatTag(subject.cat)}`;

  // تعريف التبويبات الأربعة
  const TABS = [
    { id: 'overview', label: '📖 نظرة عامة ومواضيع' },
    { id: 'resources', label: `🔗 مصادر التعلم (${subject.resources ? subject.resources.length : 0})` },
    { id: 'comments', label: `💬 ملاحظات ونقاش (${subject.comments ? subject.comments.length : 0})` },
    { id: 'visual', label: '🎨 رسم ومخطط مرئي' }
  ];

  function renderTabsHeader() {
    tabsContainer.innerHTML = TABS.map(t => {
      return `<button class="tab ${t.id === State.activeTab ? 'on' : ''}" data-tab="${t.id}">${t.label}</button>`;
    }).join('');

    tabsContainer.querySelectorAll('.tab').forEach(btn => {
      btn.onclick = () => {
        State.activeTab = btn.dataset.tab;
        renderTabsHeader();
        renderTabContent();
      };
    });
  }

  function renderTabContent() {
    if (State.activeTab === 'overview') {
      body.innerHTML = `
        <div style="font-size:1.05rem;margin-bottom:18px;line-height:1.8">${subject.desc}</div>
        <h4 style="margin:16px 0 10px">المواضيع الرئيسية المدروسة:</h4>
        <ul class="topics">
          ${(subject.topics || []).map(tp => `<li>${tp}</li>`).join('')}
        </ul>
        <div style="margin-top:28px;padding-top:14px;border-top:1.5px solid var(--line);display:flex;justify-content:space-between;align-items:center">
          <small style="color:var(--muted)">معرّف المادة: ${subject.id}</small>
          <button class="btn sm ghost" id="delSubjectBtn" style="color:#ef4444">🗑️ حذف المادة</button>
        </div>`;

      // معالجة حذف المادة بالكامل
      const delSub = document.getElementById('delSubjectBtn');
      if (delSub) {
        delSub.onclick = () => {
          if (confirm(`هل أنت متأكد من رغبتك في حذف مادة "${subject.title}"؟`)) {
            State.subjects = State.subjects.filter(s => s.id !== subject.id);
            saveData();
            initChips();
            renderGrid();
            dlg.close();
          }
        };
      }
    } 
    else if (State.activeTab === 'resources') {
      const resList = subject.resources || [];
      body.innerHTML = `
        <div class="row" style="background:var(--accent-soft);padding:14px;border-radius:14px;margin-bottom:18px">
          <input id="r_title" placeholder="اسم المصدر أو الكورس" style="flex:2 1 180px">
          <input id="r_url" placeholder="الرابط (URL)" dir="ltr" style="flex:2 1 180px">
          <select id="r_type" style="flex:1 1 120px">
            <option>كورس مجاني</option>
            <option>كتاب رقمي</option>
            <option>يوتيوب</option>
            <option>موقع تفاعلي</option>
            <option>توثيق رسمي</option>
          </select>
          <input id="r_desc" placeholder="ملاحظة قصيرة حول المحتوى" style="flex:3 1 240px">
          <button class="btn sm" id="addResBtn">＋ إضافة</button>
        </div>
        <div id="resContainer">
          ${resList.length === 0 ? '<p class="empty" style="padding:20px 0">لا توجد مصادر مضافة بعد. كن أول من يضيف مصدراً!</p>' : ''}
          ${resList.map((r, i) => `
            <div class="item">
              <div>
                <a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a>
                <span class="tag sm" style="margin-right:6px;font-size:0.75rem">${r.type}</span>
                <small style="margin-top:4px">${r.desc || ''}</small>
              </div>
              <button class="del" data-idx="${i}" title="حذف هذا المصدر">✕</button>
            </div>
          `).join('')}
        </div>`;

      // إضافة مصدر جديد
      const addResBtn = document.getElementById('addResBtn');
      if (addResBtn) {
        addResBtn.onclick = () => {
          const t = document.getElementById('r_title').value.trim();
          let u = document.getElementById('r_url').value.trim();
          const typ = document.getElementById('r_type').value;
          const d = document.getElementById('r_desc').value.trim();

          if (!t) {
            alert('يرجى إدخال عنوان المصدر.');
            return;
          }
          if (u && !u.startsWith('http://') && !u.startsWith('https://')) {
            u = 'https://' + u;
          }

          if (!subject.resources) subject.resources = [];
          subject.resources.unshift({ id: Date.now(), title: t, url: u || '#', type: typ, desc: d });
          saveData();
          renderTabsHeader();
          renderTabContent();
        };
      }

      // حذف مصدر
      body.querySelectorAll('.del').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx, 10);
          subject.resources.splice(idx, 1);
          saveData();
          renderTabsHeader();
          renderTabContent();
        };
      });
    } 
    else if (State.activeTab === 'comments') {
      const commList = subject.comments || [];
      body.innerHTML = `
        <div class="row" style="background:var(--accent-soft);padding:14px;border-radius:14px;margin-bottom:18px">
          <input id="c_name" placeholder="اسمك / لقبك" style="flex:1 1 140px">
          <input id="c_text" placeholder="اكتب ملاحظتك، نصيحتك، أو تقييمك للمادة..." style="flex:3 1 240px">
          <button class="btn sm" id="addCommBtn">إرسال</button>
        </div>
        <div id="commContainer">
          ${commList.length === 0 ? '<p class="empty" style="padding:20px 0">لا توجد ملاحظات بعد. شارك زملاءك تجربتك!</p>' : ''}
          ${commList.map((c, i) => `
            <div class="item">
              <div>
                <b>${c.author || 'طالب علم حاسوب'}</b>
                <small style="display:inline-block;margin-right:8px">${c.date || ''}</small>
                <div style="margin-top:6px">${c.text}</div>
              </div>
              <button class="del" data-idx="${i}" title="حذف هذه الملاحظة">✕</button>
            </div>
          `).join('')}
        </div>`;

      // إضافة تعليق وملاحظة
      const addCommBtn = document.getElementById('addCommBtn');
      if (addCommBtn) {
        addCommBtn.onclick = () => {
          const name = document.getElementById('c_name').value.trim() || 'طالب مجهول';
          const txt = document.getElementById('c_text').value.trim();

          if (!txt) {
            alert('يرجى كتابة نص الملاحظة.');
            return;
          }

          const today = new Date().toISOString().split('T')[0];
          if (!subject.comments) subject.comments = [];
          subject.comments.unshift({ id: Date.now(), author: name, date: today, text: txt });
          saveData();
          renderTabsHeader();
          renderTabContent();
        };
      }

      // حذف تعليق
      body.querySelectorAll('.del').forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx, 10);
          subject.comments.splice(idx, 1);
          saveData();
          renderTabsHeader();
          renderTabContent();
        };
      });
    } 
    else if (State.activeTab === 'visual') {
      const detailedSvg = getDiagramSvg(subject.art, false);
      body.innerHTML = `
        <div class="artbox" title="مخطط بياني توضيحي للمادة">
          ${detailedSvg}
        </div>
        
        <div class="arth">
          <span>لوحة الملاحظات والرسم التفاعلية:</span>
          <button class="btn sm ghost" id="clearDrw">مسح اللوحة</button>
        </div>

        <div class="palette">
          <span style="font-size:0.85rem;color:var(--muted)">اختر اللون:</span>
          <button class="pcol on" data-col="#ffd666" style="background:#ffd666"></button>
          <button class="pcol" data-col="#5bc0be" style="background:#5bc0be"></button>
          <button class="pcol" data-col="#ff6fae" style="background:#ff6fae"></button>
          <button class="pcol" data-col="#8b7dff" style="background:#8b7dff"></button>
          <button class="pcol" data-col="#4ade80" style="background:#4ade80"></button>
          <button class="pcol" data-col="#ffffff" style="background:#ffffff"></button>
        </div>

        <canvas id="drw"></canvas>
      `;

      setTimeout(() => {
        setupDrawingBoard(subject);
      }, 50);
    }
  }

  renderTabsHeader();
  renderTabContent();

  dlg.showModal();

  // زر الإغلاق
  const dx = document.getElementById('dx');
  if (dx) {
    dx.onclick = () => dlg.close();
  }

  // إغلاق عند النقر على الخلفية المعتمة
  dlg.onclick = (e) => {
    if (e.target === dlg) dlg.close();
  };
}

/* ====================================================================
   11. نافذة إضافة مادة جديدة (Add New Subject Modal)
   ==================================================================== */
function initAddSubjectModal() {
  const addBtn = document.getElementById('add');
  const nd = document.getElementById('nd');
  const nx = document.getElementById('nx');
  const nsave = document.getElementById('nsave');
  const n3 = document.getElementById('n3');

  if (!addBtn || !nd) return;

  function populateCategories() {
    if (!n3) return;
    const cats = ['هياكل وخوارزميات', 'أساسيات وتطوير', 'أنظمة وشبكات', 'ذكاء اصطناعي', 'قواعد بيانات', 'أمن وحماية', 'هندسة حاسوب'];
    n3.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  addBtn.onclick = () => {
    populateCategories();
    // تصفير الحقول
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n5').value = '';
    document.getElementById('n6').value = '';
    nd.showModal();
  };

  if (nx) {
    nx.onclick = () => nd.close();
  }

  nd.onclick = (e) => {
    if (e.target === nd) nd.close();
  };

  if (nsave) {
    nsave.onclick = () => {
      const name = document.getElementById('n1').value.trim();
      const en = document.getElementById('n2').value.trim() || 'Computer Science Subject';
      const cat = document.getElementById('n3').value;
      const year = document.getElementById('n4').value;
      const art = document.getElementById('n7').value;
      const desc = document.getElementById('n5').value.trim();
      const topicsStr = document.getElementById('n6').value.trim();

      if (!name) {
        alert('يرجى إدخال اسم المادة بالعربية.');
        return;
      }
      if (!desc) {
        alert('يرجى كتابة وصف مختصر للمادة.');
        return;
      }

      const topics = topicsStr ? topicsStr.split(/[,،]+/).map(t => t.trim()).filter(Boolean) : ['مفاهيم تأسيسية', 'تطبيقات عملية'];

      const newSubject = {
        id: 'cs-' + Date.now(),
        title: name,
        en: en,
        cat: cat,
        year: year,
        icon: '📘',
        color: '#5b4bff',
        art: art,
        desc: desc,
        topics: topics,
        resources: [],
        comments: [],
        drawing: null
      };

      State.subjects.unshift(newSubject);
      saveData();
      initChips();
      renderGrid();
      nd.close();

      // التمرير نحو المادة المضافة حديثاً
      const firstCard = document.querySelector('.grid .card');
      if (firstCard) {
        firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  }
}

/* ====================================================================
   12. عدادات الإحصائيات الحية التفاعلية (Animated Counters)
   ==================================================================== */
function updateStatsCounters() {
  const s1 = document.getElementById('s1');
  const s2 = document.getElementById('s2');
  const s3 = document.getElementById('s3');

  const totalSubjects = State.subjects.length;
  const totalResources = State.subjects.reduce((sum, s) => sum + (s.resources ? s.resources.length : 0), 0);
  const totalComments = State.subjects.reduce((sum, s) => sum + (s.comments ? s.comments.length : 0), 0);

  if (s1) animateCount(s1, totalSubjects);
  if (s2) animateCount(s2, totalResources);
  if (s3) animateCount(s3, totalComments);
}

function animateCount(el, target) {
  const current = parseInt(el.textContent, 10) || 0;
  if (current === target) return;

  const duration = 800;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing Out Quart
    const ease = 1 - Math.pow(1 - progress, 4);
    const value = Math.floor(current + (target - current) * ease);

    el.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(step);
}

/* ====================================================================
   13. اختصارات لوحة المفاتيح والتهيئة عند الإقلاع (Init & Shortcuts)
   ==================================================================== */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // الضغط على مفتاح "/" للتركيز على مربع البحث
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const q = document.getElementById('q');
      if (q) {
        q.focus();
        q.select();
      }
    }

    // الضغط على Escape لإغلاق النوافذ المنبثقة أو تفريغ البحث
    if (e.key === 'Escape') {
      const dlg = document.getElementById('dlg');
      const nd = document.getElementById('nd');
      if (dlg && dlg.open) dlg.close();
      if (nd && nd.open) nd.close();
    }
  });
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * بدء تشغيل كافة وحدات الموقع عند اكتمال تحميل شجرة DOM
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 بدء تشغيل نظام دليل مواد علم الحاسوب CS Hub...');
  loadData();
  initTheme();
  initCosmicCanvas();
  initParallax();
  initLaptopCode();
  initSearchEngine();
  initChips();
  renderGrid();
  initAddSubjectModal();
  updateStatsCounters();
  initKeyboardShortcuts();
  console.log('✅ اكتمل تحميل وربط كافة وظائف الموقع بنجاح!');
});

