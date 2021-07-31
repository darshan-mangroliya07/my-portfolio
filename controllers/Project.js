module.exports = (req, res, next) => {
    res.render('project', { title: 'Projects', home: false, project: true, about: false, contact: false });
}