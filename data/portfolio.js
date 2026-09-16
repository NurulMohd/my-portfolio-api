const portfolio = {
  profile: {
    name: 'Nurul Mohammad',
    role: 'DevOps Engineer',
    location: 'Kuala Lumpur',
    introduction:
      'I help teams move from “it works on my machine” to dependable, observable software delivery.',
    availability: 'Available for work',
    metrics: [
      {
        value: '4+',
        label: 'Years building delivery systems',
      },
      {
        value: '99.9%',
        label: 'Target uptime for managed services',
      },
      {
        value: '∞',
        label: 'Curiosity for better workflows',
      },
    ],
  },
  skills: [
    {
      category: 'Cloud & infrastructure',
      tools: ['AWS', 'Terraform', 'Linux', 'Networking'],
    },
    {
      category: 'Automation & delivery',
      tools: ['GitHub Actions', 'Bash', 'Git', 'Release strategy'],
    },
    {
      category: 'Reliability & insight',
      tools: ['Prometheus', 'Grafana', 'CloudWatch', 'Runbooks'],
    },
  ],
  projects: [
    {
      id: 'release-confidence',
      number: '01',
      type: 'Delivery systems',
      title: 'Release confidence for a growing product team',
      description:
        'Created a GitHub Actions delivery workflow with quality gates, preview environments, and safe rollback paths.',
      result: '40% faster releases',
    },
    {
      id: 'repeatable-platform',
      number: '02',
      type: 'Cloud foundation',
      title: 'A repeatable platform for three environments',
      description:
        'Defined secure AWS networking, access, and compute with Terraform so new environments can be provisioned in minutes.',
      result: 'Minutes, not days',
    },
    {
      id: 'useful-signals',
      number: '03',
      type: 'Observability',
      title: 'Turning noisy alerts into useful signals',
      description:
        'Introduced service dashboards, actionable alerts, and runbooks that help teams find the right problem faster.',
      result: '25% fewer incidents',
    },
  ],
  contact: {
    email: 'nurul@example.com',
    links: {
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
};

module.exports = portfolio;
