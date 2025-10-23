export interface SkillNode {
  key: string;
  name: string;
  weight: number;
  experienceYears: string | number;
  star?: boolean;
  tags?: string[];
}

// Base properties shared by all nodes
interface BaseSkillTreeNode {
  name: string;
  star?: boolean;
  tags: string[];
}

// Branch nodes (non-leaf): must have children
export interface SkillTreeBranch extends BaseSkillTreeNode {
  children: SkillTreeNode[];
  key?: never;
  value?: never;
  experienceYears?: never;
}

// Leaf nodes: must NOT have children and must include leaf properties like key, value, tags, ...
export interface SkillTreeLeaf extends BaseSkillTreeNode {
  key: string;
  value: number;
  experienceYears: number | string;
  children?: never;
}

// Unified type (recursive tree structure)
export type SkillTreeNode = SkillTreeBranch | SkillTreeLeaf;

export const skillTree: SkillTreeNode[] = [
  {
    name: 'Skills',
    tags: [],
    children: [
      {
        name: 'Software Engineering',
        tags: [],
        children: [
          {
            name: 'Frontend',
            tags: ['frontend'],
            children: [
              {
                name: 'JavaScript Frameworks',
                tags: ['javascript'],
                children: [
                  {
                    key: 'angular',
                    name: 'Angular',
                    value: 9,
                    experienceYears: 7,
                    tags: ['frontend', 'javascript', 'library'],
                  },
                  {
                    key: 'vuejs',
                    name: 'Vue.js',
                    value: 7,
                    experienceYears: 1,
                    tags: ['frontend', 'javascript', 'library'],
                  },
                  {
                    key: 'react',
                    name: 'React',
                    value: 3,
                    experienceYears: 1,
                    tags: ['frontend', 'javascript', 'library'],
                  },
                  {
                    key: 'd3js',
                    name: 'D3.js',
                    value: 6,
                    experienceYears: 1,
                    tags: ['frontend', 'visualization', 'frontend'],
                  },
                  {
                    key: 'jquery',
                    name: 'jQuery',
                    value: 2,
                    star: true,
                    experienceYears: 5,
                    tags: ['Javascript', 'library'],
                  },
                  {
                    key: 'underscore',
                    name: 'Underscore',
                    value: 3,
                    experienceYears: 4,
                    tags: ['Javascript', 'library'],
                  },
                  {
                    key: 'lodash',
                    name: 'Lodash',
                    value: 4,
                    experienceYears: 4,
                    tags: ['Javascript', 'library'],
                  },
                ],
              },
              {
                name: 'Web Styling',
                tags: ['website'],
                children: [
                  {
                    key: 'css',
                    name: 'CSS',
                    value: 3,
                    star: true,
                    experienceYears: '5+',
                    tags: ['website'],
                  },
                  {
                    key: 'sass',
                    name: 'SASS',
                    value: 2,
                    star: true,
                    experienceYears: '5+',
                    tags: ['website', 'css'],
                  },
                  {
                    key: 'less',
                    name: 'LESS',
                    value: 4,
                    experienceYears: 1,
                    tags: ['website', 'css'],
                  },
                  {
                    key: 'bootstrap',
                    name: 'Bootstrap',
                    value: 4,
                    experienceYears: 4,
                    tags: ['Javascript', 'Design', 'library'],
                  },
                  {
                    key: 'material-design',
                    name: 'Material Design',
                    value: 4,
                    experienceYears: 2,
                    tags: ['Javascript', 'Design', 'library'],
                  },
                ],
              },
            ],
          },
          {
            name: 'Backend',
            tags: ['backend'],
            children: [
              {
                name: 'Languages',
                tags: ['languages'],
                children: [
                  {
                    key: 'nodejs',
                    name: 'Node.js',
                    value: 8,
                    experienceYears: 7,
                    tags: ['backend', 'javascript'],
                  },
                  {
                    key: 'python',
                    name: 'Python',
                    value: 7,
                    experienceYears: 5,
                    tags: ['backend', 'automation'],
                  },
                  {
                    key: 'java',
                    name: 'Java',
                    value: 7,
                    experienceYears: 4,
                    tags: ['backend', 'enterprise'],
                  },
                  {
                    key: 'php',
                    name: 'PHP',
                    value: 5,
                    experienceYears: 7,
                    tags: ['website', 'language', 'program', 'development'],
                  },
                  {
                    key: 'c',
                    name: 'C',
                    value: 3,
                    experienceYears: 2,
                    tags: ['game', 'language', 'program', 'development'],
                  },
                  {
                    key: 'cpp',
                    name: 'C++',
                    value: 3,
                    experienceYears: 1,
                    tags: ['language', 'program', 'development'],
                  },
                  {
                    key: 'perl',
                    name: 'Perl',
                    value: 3,
                    experienceYears: 1,
                    tags: ['scripting', 'language', 'program', 'development'],
                  },
                  {
                    key: 'objective-c',
                    name: 'Objective C',
                    value: 4,
                    experienceYears: 2,
                    tags: ['language', 'program', 'development'],
                  },
                  {
                    key: 'swift',
                    name: 'Swift',
                    value: 3,
                    experienceYears: 1,
                    tags: ['language', 'program', 'development'],
                  },
                ],
              },
              {
                name: 'APIs & Integration',
                tags: ['api'],
                children: [
                  {
                    key: 'rest-api-design',
                    name: 'REST API Design',
                    value: 6,
                    experienceYears: 8,
                    tags: ['backend', 'integration'],
                  },
                  {
                    key: 'system-design',
                    name: 'System Design',
                    value: 8,
                    experienceYears: 7,
                    tags: ['architecture', 'planning'],
                  },
                ],
              },
            ],
          },
          {
            name: 'Database',
            tags: ['database'],
            children: [
              {
                name: 'Relational',
                tags: ['relational'],
                children: [
                  {
                    key: 'postgresql',
                    name: 'PostgreSQL',
                    value: 8,
                    experienceYears: 6,
                    tags: ['database', 'sql'],
                  },
                  {
                    key: 'mysql',
                    name: 'MySQL',
                    value: 7,
                    experienceYears: 5,
                    tags: ['database', 'sql'],
                  },
                  {
                    key: 'oracle',
                    name: 'Oracle',
                    value: 6,
                    experienceYears: 2,
                    tags: ['database', 'enterprise'],
                  },
                ],
              },
              {
                name: 'NoSQL & Graph',
                tags: ['NoSQL'],
                children: [
                  {
                    key: 'mongodb',
                    name: 'MongoDB',
                    value: 4,
                    experienceYears: 1,
                    tags: ['db', 'database'],
                  },
                  {
                    key: 'orientdb',
                    name: 'OrientDB',
                    value: 6,
                    experienceYears: 1,
                    tags: ['database', 'graph'],
                  },
                ],
              },
              {
                key: 'cmdb',
                name: 'Configuration Management Database (CMDB)',
                value: 7,
                experienceYears: 3,
                tags: ['automation', 'infrastructure'],
              },
            ],
          },
        ],
      },
      {
        name: 'DevOps & Infrastructure',
        tags: ['devops'],
        children: [
          {
            name: 'Automation & CI/CD',
            tags: ['automation'],
            children: [
              {
                key: 'ci-cd-pipelines',
                name: 'CI/CD Pipelines',
                value: 10,
                experienceYears: 6,
                tags: ['devops', 'automation'],
              },
              {
                key: 'github-actions',
                name: 'GitHub Actions',
                value: 9,
                experienceYears: 4,
                tags: ['ci', 'automation'],
              },
              {
                key: 'jenkins',
                name: 'Jenkins',
                value: 9,
                experienceYears: 5,
                tags: ['ci', 'deployment'],
              },
              {
                key: 'argocd',
                name: 'ArgoCD',
                value: 8,
                experienceYears: 3,
                tags: ['cd', 'kubernetes'],
              },
              {
                key: 'ansible',
                name: 'Ansible',
                value: 8,
                experienceYears: 5,
                tags: ['automation', 'config'],
              },
            ],
          },
          {
            name: 'Cloud & Platforms',
            tags: ['cloud'],
            children: [
              {
                key: 'aws',
                name: 'AWS',
                value: 8,
                experienceYears: 5,
                tags: ['cloud', 'infrastructure'],
              },
              {
                key: 'openshift',
                name: 'OpenShift',
                value: 9,
                experienceYears: 4,
                tags: ['kubernetes', 'deployment'],
              },
              {
                key: 'kubernetes',
                name: 'Kubernetes',
                value: 7,
                experienceYears: 4,
                tags: ['containers', 'cloud'],
              },
              {
                key: 'docker',
                name: 'Docker',
                value: 7,
                experienceYears: 6,
                tags: ['containers', 'development'],
              },
              {
                key: 'podman',
                name: 'Podman',
                value: 6,
                experienceYears: 2,
                tags: ['containers', 'devops'],
              },
              {
                key: 'opensearch',
                name: 'OpenSearch',
                value: 8,
                experienceYears: 3,
                tags: ['observability', 'logging'],
              },
            ],
          },
          {
            name: 'Security & Secrets Management',
            tags: ['security'],
            children: [
              {
                key: 'hashicorp-vault',
                name: 'HashiCorp Vault',
                value: 10,
                experienceYears: 3,
                tags: ['security', 'secrets'],
              },
            ],
          },
          {
            name: 'Version Control & Build',
            tags: ['version'],
            children: [
              {
                key: 'git',
                name: 'GIT',
                value: 4,
                experienceYears: 8,
                tags: ['version', 'control'],
              },
              {
                key: 'subversion',
                name: 'Subversion',
                value: 3,
                star: true,
                experienceYears: 5,
                tags: ['version', 'control'],
              },
              { key: 'ant', name: 'Ant', value: 4, experienceYears: 4, tags: ['build', 'Java'] },
              { key: 'maven', name: 'Maven', value: 3, experienceYears: 2, tags: ['build'] },
              {
                key: 'npm',
                name: 'npm',
                value: 2,
                experienceYears: 7,
                tags: ['Javascript', 'module', 'manager', 'package'],
              },
            ],
          },
        ],
      },
      {
        name: 'Development Tools & Design',
        tags: ['design'],
        children: [
          {
            name: 'Environments',
            tags: ['development'],
            children: [
              {
                key: 'xcode',
                name: 'Xcode',
                value: 4,
                experienceYears: 5,
                tags: ['development', 'environment'],
              },
              {
                key: 'vscode',
                name: 'Visual Studio Code',
                value: 4,
                experienceYears: 7,
                tags: ['development', 'environment'],
              },
            ],
          },
          {
            name: 'Modeling & Methodologies',
            tags: ['modeling'],
            children: [
              {
                key: 'uml',
                name: 'UML',
                value: 6,
                experienceYears: 1,
                tags: ['development', 'methodology', 'modeling'],
              },
              {
                key: 'agile-development',
                name: 'Agile Development',
                value: 8,
                experienceYears: 10,
                tags: ['team', 'process'],
              },
              {
                key: 'tdd',
                name: 'Test-Driven Development',
                value: 7,
                experienceYears: 5,
                tags: ['testing', 'quality'],
              },
              { key: 'i18n', name: 'i18n', value: 3, experienceYears: 4, tags: ['development'] },
            ],
          },
        ],
      },
      {
        name: 'Soft Skills',
        tags: ['soft'],
        children: [
          {
            key: 'leadership-mentorship',
            name: 'Leadership & Mentorship',
            value: 7,
            experienceYears: 5,
            tags: ['soft', 'team'],
          },
          {
            key: 'communication',
            name: 'Communication',
            value: 8,
            experienceYears: 10,
            tags: ['soft', 'collaboration'],
          },
          {
            key: 'problem-solving',
            name: 'Problem Solving',
            value: 6,
            experienceYears: 10,
            tags: ['soft', 'analysis'],
          },
          {
            key: 'agile-coaching',
            name: 'Agile Coaching',
            value: 5,
            experienceYears: 3,
            tags: ['soft', 'leadership'],
          },
        ],
      },
      {
        name: 'Graphics & Web Media',
        tags: ['graphics'],
        children: [
          { key: 'svg', name: 'SVG', value: 2, star: true, experienceYears: 5, tags: ['XML'] },
          {
            key: 'opengl',
            name: 'OpenGl',
            value: 5,
            experienceYears: 1,
            tags: ['graphics', 'game', 'library'],
          },
          { key: 'xslt', name: 'XSLT', value: 3, experienceYears: 2, tags: ['XML'] },
        ],
      },
      {
        name: 'Content & CMS',
        tags: ['content'],
        children: [
          {
            key: 'drupal',
            name: 'Drupal',
            value: 5,
            experienceYears: 2,
            tags: ['content', 'management', 'platform'],
          },
        ],
      },
    ],
  },
];

function flattenSkills(nodes: SkillTreeNode[]): SkillNode[] {
  const result: SkillNode[] = [];

  // Recursive walk, passing accumulated tags
  const walk = (children: SkillTreeNode[], parentTags: string[] = []) => {
    for (const node of children) {
      // Merge parent tags (if any) with node's own tags
      const mergedTags = [...new Set([...(parentTags || []), ...(node.tags || [])])];

      if (node.children && node.children.length > 0) {
        walk(node.children, mergedTags);
      } else if (node.key && node.value !== undefined) {
        result.push({
          key: node.key,
          name: node.name,
          weight: node.value,
          experienceYears: node.experienceYears,
          tags: mergedTags,
          star: node.star,
        });
      }
    }
  };

  walk(nodes);
  return result;
}

// Generate the flattened skill node array
export const skillNodes: SkillNode[] = flattenSkills(skillTree);

export const synonyms = {
  js: 'javascript',
  ts: 'typescript',
};
