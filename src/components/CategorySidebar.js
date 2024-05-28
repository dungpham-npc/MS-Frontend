import React from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const categories = [
    {
        name: 'Category 1',
        subcategories: ['Subcategory 1.1', 'Subcategory 1.2'],
    },
    {
        name: 'Category 2',
        subcategories: ['Subcategory 2.1', 'Subcategory 2.2'],
    },
    {
        name: 'Category 3',
        subcategories: ['Subcategory 3.1', 'Subcategory 3.2'],
    },
    {
        name: 'Category 4',
        subcategories: ['Subcategory 4.1', 'Subcategory 4.2'],
    },
];

function CategorySidebar() {
    const [open, setOpen] = React.useState({});

    const handleClick = (category) => {
        setOpen((prevOpen) => ({
            ...prevOpen,
            [category]: !prevOpen[category],
        }));
    };

    return (
        <List component="nav">
            {categories.map((category) => (
                <div key={category.name}>
                    <ListItem button onClick={() => handleClick(category.name)}>
                        <ListItemText primary={category.name} />
                        {open[category.name] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open[category.name]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {category.subcategories.map((subcategory) => (
                                <ListItem key={subcategory} button sx={{ pl: 4 }}>
                                    <ListItemText primary={subcategory} />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </div>
            ))}
        </List>
    );
}

export default CategorySidebar;
