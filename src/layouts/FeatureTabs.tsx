//React hooks
import { useState } from 'react';
//Internal imports
import { useThemeStore } from '../store/store';
import { features } from '../data/features';
//React components
import Card from '../components/Card';
import Button from '../components/Button';
//External Libraries
import { Link } from 'react-router-dom';

function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("onsite");
  const initialTheme = useThemeStore(state => state.initialTheme);

  const current = features.find((f) => f.id === activeTab);

  return (
    <section className="w-full max-w-5xl mx-auto my-7">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {features.map((feature) => (
          <Button
            variant='customBtn'
            key={feature.id}
            active={activeTab === feature.id}
            onClick={() => setActiveTab(feature.id)}
          >
            {feature.title}
          </Button>
        ))}
      </div>

      {current && (
        <Card variant="summaryCard">
          <div className="flex flex-col items-center justify-center">
            <div className={`mb-4 ${initialTheme === 'light' ? 'text-blue-900' : 'text-blue-400'}`}>
                <current.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{current.title}</h3>
            <p className={`${initialTheme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
              {current.description}
            </p>
          </div>
          <div className="text-center mt-10 mb-8">
            <Link 
              to="/products"
              className={`${initialTheme === 'light' 
                  ? 'bg-blue-900 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-400'} 
                  px-6 py-3 rounded-full transition-all font-semibold`}
            >
              Scopri tutti i prodotti
            </Link>
          </div>
        </Card>
      )}

    
    </section>
  );
}

export default FeatureTabs;
