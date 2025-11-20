import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import Card from './Card';

function TabCard({activeFilter}) {

    const items = [
        { id: 1, category: 'design', title: 'UI Design', description: 'Création d\'interfaces modernes', size: 'large', color: '#667eea' },
        { id: 2, category: 'dev', title: 'React App', description: 'Développement d\'applications', size: 'small', color: '#f093fb' },
        { id: 3, category: 'design', title: 'Logo Design', description: 'Identité visuelle', size: 'medium', color: '#4facfe' },
        { id: 4, category: 'photo', title: 'Photographie', description: 'Photos professionnelles', size: 'large', color: '#43e97b' },
        { id: 5, category: 'dev', title: 'API REST', description: 'Backend development', size: 'small', color: '#fa709a' },
        { id: 6, category: 'design', title: 'Branding', description: 'Stratégie de marque', size: 'medium', color: '#30cfd0' },
        { id: 7, category: 'photo', title: 'Portrait', description: 'Photos de studio', size: 'medium', color: '#a8edea' },
        { id: 8, category: 'dev', title: 'Mobile App', description: 'Applications mobiles', size: 'large', color: '#ff6b6b' },
        { id: 9, category: 'design', title: 'Web Design', description: 'Sites web responsive', size: 'small', color: '#764ba2' },
        { id: 10, category: 'photo', title: 'Nature', description: 'Paysages naturels', size: 'medium', color: '#38ef7d' }
    ];
    const gridRef = useRef(null);
    const iso = useRef(null);


    useEffect(() => {
        if (gridRef.current) {
            iso.current = new Isotope(gridRef.current, {
                itemSelector: '.grid-item',
                layoutMode: 'masonry',
                masonry: { columnWidth: '.grid-sizer' }
            });
        }

        return () => {
            if (iso.current) iso.current.destroy();
        };
    }, []);

    useEffect(() => {
        if (iso.current) {
            const filter = activeFilter === '*' ? '*' : `.${activeFilter}`;
            iso.current.arrange({ filter });
        }
    }, [activeFilter]);

    return (
        <div ref={gridRef} className="grid">
            <div className="grid-sizer"></div>
            {items.map(item => (
                <Card key={item.id} className={`grid-item ${item.category}`} size={item.size} color={item.color} title={item.title} description={item.description} category={item.category} />
            ))}
        </div>
    )
}

export default TabCard;