import { Input, Radio, Select } from "antd";


export default function TodoList() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input placeholder="Search task" />
            <Radio.Group 
                options={[
                    { label: 'All', value: 'all' },
                    { label: 'Completed', value: 'completed' },
                    { label: 'Pending', value: 'pending' }
                ]}
            />
            <div>
                <Select 
                    placeholder="Filter by status"
                    options={[
                        { label: 'Hard', value: 'Hard' },
                        { label: 'Medium', value: 'Medium' },
                        { label: 'Easy', value: 'Easy' }
                    ]}
                />
            </div>
        </div>
    )
}