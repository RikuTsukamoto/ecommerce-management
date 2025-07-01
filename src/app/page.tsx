'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const handleTabSwitch = (tabName: string) => {
    setActiveTab(tabName)
  }

  const handleShowModal = (title: string) => {
    setModalTitle(title)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const tabs = {
    dashboard: 'ダッシュボード',
    products: '商品管理',
    inventory: '在庫管理',
    orders: '注文管理',
    reports: 'レポート',
    integrations: 'EC連携',
    settings: '設定'
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* サイドバー */}
      <nav className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-xl font-bold">🛒 ECommerce</h1>
          <p className="text-sm text-gray-300">Management System</p>
        </div>
        
        <ul className="mt-6">
          {Object.entries(tabs).map(([key, label]) => (
            <li key={key} className="mb-1">
              <button
                onClick={() => handleTabSwitch(key)}
                className={`w-full text-left px-6 py-3 flex items-center space-x-3 transition-all duration-200 border-l-3 ${
                  activeTab === key
                    ? 'bg-white bg-opacity-10 border-blue-400'
                    : 'border-transparent hover:bg-white hover:bg-opacity-5'
                }`}
              >
                <span className="text-lg">
                  {key === 'dashboard' && '📊'}
                  {key === 'products' && '📦'}
                  {key === 'inventory' && '📋'}
                  {key === 'orders' && '🛍️'}
                  {key === 'reports' && '📈'}
                  {key === 'integrations' && '🔗'}
                  {key === 'settings' && '⚙️'}
                </span>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <main className="flex-1 flex flex-col">
        {/* ヘッダー */}
        <header className="bg-white shadow-sm px-8 py-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{tabs[activeTab as keyof typeof tabs]}</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => alert('通知機能\n\n• 新規注文が3件あります\n• 在庫不足商品があります\n• EC連携の同期が完了しました')}
              className="relative p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              🔔
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div 
              onClick={() => alert('ユーザーメニュー\n\n• プロフィール設定\n• パスワード変更\n• ログアウト')}
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                田
              </div>
              <span>田中太郎</span>
            </div>
          </div>
        </header>

        {/* ダッシュボード コンテンツ */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' ? (
            <>
              {/* 統計カード */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div 
                  onClick={() => handleShowModal('今日の売上詳細')}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-gray-500 font-medium">今日の売上</span>
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-xl">💰</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">¥247,500</div>
                  <div className="text-sm text-green-600 flex items-center">
                    ↗️ +12.5% 前日比
                  </div>
                </div>

                <div 
                  onClick={() => handleShowModal('注文数詳細')}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-gray-500 font-medium">今日の注文数</span>
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-xl">📋</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">89</div>
                  <div className="text-sm text-green-600 flex items-center">
                    ↗️ +5 前日比
                  </div>
                </div>

                <div 
                  onClick={() => handleShowModal('在庫アラート詳細')}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-gray-500 font-medium">在庫アラート</span>
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-xl">⚠️</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">12</div>
                  <div className="text-sm text-red-600 flex items-center">
                    📦 要確認商品
                  </div>
                </div>

                <div 
                  onClick={() => handleShowModal('EC連携状況')}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-gray-500 font-medium">EC連携状況</span>
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-xl">🔗</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">3/4</div>
                  <div className="text-sm text-green-600 flex items-center">
                    ✅ 正常稼働中
                  </div>
                </div>
              </div>

              {/* チャートと最近の注文 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    📈 売上推移（過去7日間）
                  </h3>
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center text-gray-500">
                      <div className="text-lg mb-2">グラフエリア</div>
                      <div className="text-sm">実際の開発時にChart.jsやRechartsを使用</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    🛍️ 最近の注文
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-800">#ORD-2024-001</h4>
                        <p className="text-sm text-gray-500">佐藤花子 - ¥15,800</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        処理中
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-800">#ORD-2024-002</h4>
                        <p className="text-sm text-gray-500">山田次郎 - ¥8,500</p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        発送済み
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <h4 className="font-medium text-gray-800">#ORD-2024-003</h4>
                        <p className="text-sm text-gray-500">鈴木三郎 - ¥22,300</p>
                      </div>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                        保留中
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 在庫アラート */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  ⚠️ 在庫アラート
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 border-l-4 border-red-400 rounded">
                    <span className="text-red-500 mr-3">📦</span>
                    <div>
                      <strong>商品A</strong> - 残り在庫: 3個（安全在庫: 10個）
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 border-l-4 border-red-400 rounded">
                    <span className="text-red-500 mr-3">📦</span>
                    <div>
                      <strong>商品B</strong> - 残り在庫: 1個（安全在庫: 5個）
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-20 rounded-xl shadow-md text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{tabs[activeTab as keyof typeof tabs]}画面</h2>
              <p className="text-gray-600 mb-2">この画面は開発予定です。</p>
              <p className="text-gray-600">実際のシステムでは、{tabs[activeTab as keyof typeof tabs]}に関する詳細な機能が実装されます。</p>
            </div>
          )}
        </div>
      </main>

      {/* モーダル */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{modalTitle}</h3>
              <button 
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600">
              詳細情報をここに表示します。実際のシステムでは、この部分に詳細なデータやグラフが表示されます。
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
