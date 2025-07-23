import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'workflows' | 'analytics' | 'settings'>('overview');

  const metrics = [
    {
      title: 'Active Workflows',
      value: '12',
      change: '+3 this month',
      icon: '🤖',
      color: 'accent',
    },
    {
      title: 'Time Saved',
      value: '47h',
      change: '+12h this week',
      icon: '⏰',
      color: 'primary',
    },
    {
      title: 'AI Interactions',
      value: '2,847',
      change: '+23% vs last month',
      icon: '💬',
      color: 'secondary',
    },
    {
      title: 'Cost Savings',
      value: '$8,420',
      change: '+$1,200 this month',
      icon: '💰',
      color: 'accent',
    },
  ];

  const workflows = [
    {
      name: 'Customer Support Bot',
      status: 'Active',
      interactions: 1247,
      efficiency: 94,
      lastRun: '2 mins ago',
    },
    {
      name: 'Lead Qualification',
      status: 'Active',
      interactions: 892,
      efficiency: 87,
      lastRun: '5 mins ago',
    },
    {
      name: 'Invoice Processing',
      status: 'Paused',
      interactions: 456,
      efficiency: 91,
      lastRun: '2 hours ago',
    },
    {
      name: 'Email Marketing',
      status: 'Active',
      interactions: 2341,
      efficiency: 89,
      lastRun: '1 min ago',
    },
  ];

  const recentActivity = [
    {
      action: 'New lead captured via chatbot',
      time: '2 minutes ago',
      type: 'success',
    },
    {
      action: 'Invoice #INV-2024-001 processed',
      time: '5 minutes ago',
      type: 'info',
    },
    {
      action: 'Email campaign sent to 1,247 contacts',
      time: '15 minutes ago',
      type: 'success',
    },
    {
      action: 'Workflow "Invoice Processing" paused',
      time: '2 hours ago',
      type: 'warning',
    },
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'workflows', name: 'Workflows', icon: '🔄' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 bg-background"
    >
      {/* Header */}
      <div className="bg-surface border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient">Dashboard</h1>
              <p className="text-muted mt-1">Welcome back! Here's what's happening with your automations.</p>
            </div>
            <button className="btn-primary">
              + New Workflow
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-surface/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted hover:text-text'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-8"
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{metric.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-text">{metric.value}</div>
                      <div className="text-sm text-accent">{metric.change}</div>
                    </div>
                  </div>
                  <h3 className="text-muted font-medium">{metric.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Workflows Status */}
              <div className="lg:col-span-2 card">
                <h3 className="text-xl font-semibold text-text mb-6">Active Workflows</h3>
                <div className="space-y-4">
                  {workflows.map((workflow, index) => (
                    <div
                      key={workflow.name}
                      className="flex items-center justify-between p-4 bg-background rounded-lg border border-gray-800"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          workflow.status === 'Active' ? 'bg-accent' : 'bg-yellow-500'
                        }`} />
                        <div>
                          <div className="font-medium text-text">{workflow.name}</div>
                          <div className="text-sm text-muted">{workflow.lastRun}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-text">{workflow.interactions.toLocaleString()} interactions</div>
                        <div className="text-sm text-accent">{workflow.efficiency}% efficiency</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        activity.type === 'success' ? 'bg-accent' :
                        activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div>
                        <div className="text-sm text-text">{activity.action}</div>
                        <div className="text-xs text-muted">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="card">
              <h3 className="text-xl font-semibold text-text mb-6">Performance Overview</h3>
              <div className="h-64 bg-background rounded-lg border border-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <div className="text-muted">Interactive charts would go here</div>
                  <div className="text-sm text-muted mt-2">Showing automation performance, cost savings, and efficiency metrics</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'workflows' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text">Workflow Management</h2>
              <button className="btn-primary">+ Create Workflow</button>
            </div>

            <div className="grid gap-6">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${
                        workflow.status === 'Active' ? 'bg-accent' : 'bg-yellow-500'
                      }`} />
                      <h3 className="text-xl font-semibold text-text">{workflow.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        workflow.status === 'Active' 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {workflow.status}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-outline text-sm px-4 py-2">Edit</button>
                      <button className="btn-secondary text-sm px-4 py-2">
                        {workflow.status === 'Active' ? 'Pause' : 'Resume'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-text">{workflow.interactions.toLocaleString()}</div>
                      <div className="text-sm text-muted">Interactions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{workflow.efficiency}%</div>
                      <div className="text-sm text-muted">Efficiency</div>
                    </div>
                    <div>
                      <div className="text-sm text-text">{workflow.lastRun}</div>
                      <div className="text-sm text-muted">Last Run</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-text">Analytics & Insights</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-4">Time Savings Trend</h3>
                <div className="h-48 bg-background rounded-lg border border-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-muted">Time savings chart</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-4">Cost Reduction</h3>
                <div className="h-48 bg-background rounded-lg border border-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">💰</div>
                    <div className="text-muted">Cost savings chart</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-4">Workflow Performance</h3>
                <div className="h-48 bg-background rounded-lg border border-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-muted">Performance metrics</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-4">AI Interaction Volume</h3>
                <div className="h-48 bg-background rounded-lg border border-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-muted">Interaction volume chart</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-text">Settings</h2>
            
            <div className="grid gap-6">
              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-4">Account Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Company Name</label>
                      <input
                        type="text"
                        defaultValue="BizAut Demo Company"
                        className="w-full px-3 py-2 bg-background border border-gray-700 rounded-lg text-text focus:outline-none focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="demo@bizaut.ai"
                        className="w-full px-3 py-2 bg-background border border-gray-700 rounded-lg text-text focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-4">Subscription</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-text font-medium">Professional Plan</div>
                    <div className="text-muted text-sm">$1,497/month • Next billing: Jan 15, 2024</div>
                  </div>
                  <button className="btn-outline">Manage Subscription</button>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-text mb-4">Notifications</h3>
                <div className="space-y-4">
                  {[
                    'Workflow status updates',
                    'Performance alerts',
                    'Billing notifications',
                    'Product updates',
                  ].map((notification) => (
                    <div key={notification} className="flex items-center justify-between">
                      <span className="text-text">{notification}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default DashboardPage;