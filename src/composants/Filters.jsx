import Filter from './Filter.jsx';


function Filters({ activeFilter, onFilterClick }) {

    const filters = [
        { label: 'Tout afficher', icon: '✨', className: 'active', value: '*'},
        { label: 'Design', icon: '🎨', className: '', value: 'design'},
        { label: 'Développement', icon: '💻', className: '', value: 'dev'},
        { label: 'Photo', icon: '📸', className: '', value: 'photo'}
    ];

    return(
        <div className="filters">
            {filters.map((filter, index) => (
                <Filter 
                    key={index}
                    label={filter.label}
                    icon={filter.icon}
                    className={`filter-btn ${activeFilter === (filter.label === 'Tout afficher' ? '*' : filter.label.toLowerCase()) ? 'active' : ''}`}
                    onClick={() => onFilterClick(filter.value)}
                />
            ))}
        </div>

    )
}
export default Filters;