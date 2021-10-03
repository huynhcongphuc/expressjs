const handleBar = require('handlebars');

module.exports = {
    sum: (a) => ++a,
    sortable: (field, sort) => {
        const sorttype = field === sort.column ? sort.type : 'default';

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }

        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending'
        }

        const type = types[sorttype];
        const icon = icons[sorttype];

        //Protect code web for XSS
        const address = handleBar.escapeExpression(`?_sort&column=${field}&type=${type}`);

        const output = `<a href="${address}">
                <span class="${icon}"></span>
                </a>`;
        return new handleBar.SafeString(output)
    }
}