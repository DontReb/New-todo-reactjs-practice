export default function Tabs() {
    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav className="tab-container">

            {tabs.map((tab, tabIndex) => {
                return (
                    <button className="tab-button" key={tabIndex}>
                        <h4>{tab} <span>(0)</span></h4>
                    </button>
                )
                // 53:18 video
            })}

        </nav>
    )
}
